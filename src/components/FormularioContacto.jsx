import { motion } from 'framer-motion';
import { useState } from 'react';

const FormularioContacto = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
    event.target.reset();
  };

  return (
    <section id="contacto" className="bg-white/90 py-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl rounded-3xl bg-sand/60 p-10 shadow-lg"
        >
          <h2 className="section-title text-center text-midnight">¿Eres una empresa interesada en más datos? Contáctanos</h2>
          <p className="section-subtitle mx-auto text-center">
            Completa el formulario para recibir informes personalizados, dashboards actualizados y asesoramiento sobre el
            mercado de alquiler en Barcelona.
          </p>
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-midnight">Nombre</label>
                <input
                  type="text"
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 shadow-sm focus:border-mediterranean focus:ring-mediterranean"
                  placeholder="Ana Martínez"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-midnight">Empresa</label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 shadow-sm focus:border-mediterranean focus:ring-mediterranean"
                  placeholder="UrbanData"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-midnight">Correo electrónico</label>
              <input
                type="email"
                required
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 shadow-sm focus:border-mediterranean focus:ring-mediterranean"
                placeholder="ana@empresa.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-midnight">Mensaje</label>
              <textarea
                rows="4"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 shadow-sm focus:border-mediterranean focus:ring-mediterranean"
                placeholder="Cuéntanos qué tipo de insights te interesan"
              ></textarea>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" required className="mt-1 rounded border-slate-300 text-mediterranean focus:ring-mediterranean" />
              <p className="text-sm text-slate-600">
                Acepto la política de privacidad y autorizo el tratamiento de mis datos para recibir comunicaciones sobre el
                proyecto.
              </p>
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-mediterranean px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-midnight"
            >
              Enviar mensaje
            </button>
            {sent && <p className="text-center text-sm font-medium text-mediterranean">¡Gracias! Te contactaremos en menos de 48 horas.</p>}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default FormularioContacto;
