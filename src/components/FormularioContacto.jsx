import { motion } from 'framer-motion';
import { useState } from 'react';

const EMAIL_TO = 'cmaldonadoa@student.eae.es';

const getEmailConfig = () => ({
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
});

const FormularioContacto = () => {
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const sendEmail = async (payload) => {
    const config = getEmailConfig();
    if (!config.serviceId || !config.templateId || !config.publicKey) {
      throw new Error('missing-config');
    }

    const body = {
      service_id: config.serviceId,
      template_id: config.templateId,
      user_id: config.publicKey,
      template_params: payload
    };

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      throw new Error('emailjs-error');
    }
  };

  const launchMailtoFallback = (payload) => {
    const subject = encodeURIComponent('Consulta - Análisis del alquiler en Barcelona');
    const body = encodeURIComponent(
      `Nombre: ${payload.nombre}\nEmpresa: ${payload.empresa || 'No especificada'}\nEmail: ${payload.email}\n\nMensaje:\n${payload.mensaje}`
    );
    window.location.href = `mailto:${EMAIL_TO}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = {
      nombre: formData.get('nombre').trim(),
      email: formData.get('email').trim(),
      empresa: formData.get('empresa').trim(),
      mensaje: formData.get('mensaje').trim()
    };

    if (!payload.nombre || !payload.email || !payload.mensaje) {
      setStatus({ state: 'error', message: 'Por favor completa los campos obligatorios.' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(payload.email)) {
      setStatus({ state: 'error', message: 'Introduce un correo electrónico válido.' });
      return;
    }

    setStatus({ state: 'loading', message: 'Enviando mensaje…' });

    try {
      await sendEmail(payload);
      setStatus({ state: 'success', message: '¡Gracias! Hemos recibido tu mensaje y responderemos en menos de 48 horas.' });
      event.currentTarget.reset();
    } catch (error) {
      launchMailtoFallback(payload);
      setStatus({
        state: 'warning',
        message:
          'No pudimos conectar con EmailJS. Se ha abierto tu gestor de correo para que completes el envío manualmente.'
      });
    }
  };

  return (
    <section id="contacto" className="bg-beige/60 py-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl rounded-3xl bg-white/95 p-10 shadow-soft"
        >
          <h2 className="section-title text-center">Conversemos sobre tus retos de datos urbanos</h2>
          <p className="section-subtitle mx-auto text-center">
            Completa el formulario para recibir insights personalizados, dashboards a medida o una sesión de trabajo con nuestro
            equipo de analítica territorial.
          </p>
          <form onSubmit={handleSubmit} className="mt-10 space-y-6" noValidate>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="nombre" className="block text-sm font-semibold text-charcoal">
                  Nombre*
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  className="mt-2 w-full rounded-2xl border border-cloud/70 px-4 py-3 shadow-sm focus:border-olive focus:ring-olive"
                  placeholder="Ana Martínez"
                />
              </div>
              <div>
                <label htmlFor="empresa" className="block text-sm font-semibold text-charcoal">
                  Empresa
                </label>
                <input
                  id="empresa"
                  name="empresa"
                  type="text"
                  className="mt-2 w-full rounded-2xl border border-cloud/70 px-4 py-3 shadow-sm focus:border-olive focus:ring-olive"
                  placeholder="UrbanData"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-charcoal">
                Correo electrónico*
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-2xl border border-cloud/70 px-4 py-3 shadow-sm focus:border-olive focus:ring-olive"
                placeholder="ana@empresa.com"
              />
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-sm font-semibold text-charcoal">
                Mensaje*
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="4"
                required
                className="mt-2 w-full rounded-2xl border border-cloud/70 px-4 py-3 shadow-sm focus:border-olive focus:ring-olive"
                placeholder="Cuéntanos qué tipo de insights te interesan"
              ></textarea>
            </div>
            <div className="flex items-start gap-3">
              <input
                id="privacidad"
                type="checkbox"
                required
                className="mt-1 rounded border-cloud text-olive focus:ring-olive"
              />
              <label htmlFor="privacidad" className="text-sm text-charcoal/80">
                Acepto la política de datos y autorizo el tratamiento de mis datos para recibir comunicaciones sobre el proyecto.
              </label>
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-olive px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-sage disabled:cursor-not-allowed disabled:opacity-70"
              disabled={status.state === 'loading'}
            >
              {status.state === 'loading' ? 'Enviando…' : 'Enviar mensaje'}
            </button>
            {status.state !== 'idle' && (
              <p
                role="status"
                className={`text-center text-sm font-medium ${
                  status.state === 'success'
                    ? 'text-olive'
                    : status.state === 'error'
                    ? 'text-red-600'
                    : 'text-tealnight'
                }`}
              >
                {status.message}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default FormularioContacto;
