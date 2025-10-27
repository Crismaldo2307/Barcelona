import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const initialMessages = [
  {
    role: 'assistant',
    content: '¡Hola! Soy el asistente IA de Cristian y Alonso Data. ¿En qué puedo ayudarte?'
  }
];

const knowledgeBase = [
  {
    category: 'saludo',
    keywords: ['hola', 'buenas', 'saludos', 'hey'],
    response:
      '¡Hola! Estamos analizando cómo ha evolucionado el alquiler en Barcelona entre 2014 y 2025. Pregúntame sobre renta, turismo, comercio o privacidad de datos.'
  },
  {
    category: 'renta/alquiler',
    keywords: ['renta', 'alquiler', 'precio', 'mensual', 'vivienda'],
    response:
      'El alquiler medio pasó de 860 € en 2014 a casi 1.500 € en 2025. La escalada refleja una fuerte demanda y la conversión de vivienda a usos turísticos. Puedes explorar el gráfico de línea para ver los hitos anuales.'
  },
  {
    category: 'turismo',
    keywords: ['turismo', 'visitantes', 'turistas', 'hotel', 'airbnb'],
    response:
      'Barcelona recibió 8,5 millones de turistas en 2014 y supera los 11 millones en 2025. Los picos turísticos incrementan los ingresos potenciales de los propietarios y presionan las rentas. Observa el gráfico combinado de turismo y comercio para más detalles.'
  },
  {
    category: 'comercio',
    keywords: ['comercio', 'tiendas', 'restauración', 'consumo', 'gasto'],
    response:
      'El índice de comercios orientados a turismo creció 39 puntos desde 2014. Nuevas licencias de restauración y retail experiencial atraen gasto, refuerzan la demanda de alojamientos y elevan los precios en zonas centrales.'
  },
  {
    category: 'correlación',
    keywords: ['correlacion', 'correlación', 'relacion', 'relación', 'impacto'],
    response:
      'La correlación turismo-renta se visualiza en el gráfico de dispersión: los puntos con mayor intensidad comercial se ubican donde las rentas son más altas. Esto evidencia que más visitantes y gasto suelen ir de la mano de alquileres elevados.'
  },
  {
    category: 'bigquery/proceso',
    keywords: ['bigquery', 'etl', 'proceso', 'limpieza', 'pipeline'],
    response:
      'El flujo de preparación se ejecuta en BigQuery: ingestamos registros municipales, normalizamos series temporales y generamos tablas agregadas para Looker Studio. Consulta la página Búsqueda para ver el iframe “Proceso requerido en BigQuery”.'
  },
  {
    category: 'contacto',
    keywords: ['contacto', 'correo', 'email', 'formulario', 'hablar'],
    response:
      'Puedes escribirnos a cmaldonadoa@student.eae.es o completar el formulario al final de la página principal. Recibirás respuesta en menos de 48 horas.'
  },
  {
    category: 'looker studio',
    keywords: ['looker', 'studio', 'dashboard', 'iframe'],
    response:
      'Disponemos de dos dashboards en Looker Studio: uno con la evolución del precio de la renta y otro con el flujo en BigQuery. En la sección Búsqueda encontrarás ambos iframes listos para explorar.'
  },
  {
    category: 'mapa',
    keywords: ['mapa', 'inmigrantes', 'distrito', 'geografia', 'geografía'],
    response:
      'El mapa integrado muestra inmigrantes y renta promedio por distrito. Usa los filtros laterales para comparar zonas como Ciutat Vella, Eixample o Sant Martí y ver cómo cambian los precios.'
  },
  {
    category: 'gráficos',
    keywords: ['grafico', 'gráfico', 'visualización', 'charts', 'datos'],
    response:
      'Contamos con gráficos interactivos de líneas, barras y correlación construidos con Recharts. Pasa el cursor sobre los puntos para ver valores exactos y descubre cómo evoluciona cada indicador.'
  },
  {
    category: 'privacidad',
    keywords: ['privacidad', 'datos', 'cookies', 'tratamiento'],
    response:
      'Tratamos los datos bajo la Política de Datos publicada en la web. Solo usamos la información de contacto para responder a tus solicitudes y puedes escribir a cmaldonadoa@student.eae.es para ejercer tus derechos.'
  }
];

const fallbackResponse =
  'No tengo una respuesta directa para eso, pero puedo ayudarte con temas de alquiler, turismo, comercio, BigQuery, dashboards o privacidad. ¿Sobre cuál te gustaría saber más?';

const normalizeText = (text) => text.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');

const ChatIA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = (event) => {
    event.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input.trim() };
    const normalized = normalizeText(input);

    const match = knowledgeBase.find((entry) =>
      entry.keywords.some((keyword) => normalized.includes(normalizeText(keyword)))
    );

    const assistantMessage = {
      role: 'assistant',
      content: match ? match.response : fallbackResponse
    };

    setMessages((prev) => [...prev, userMessage, assistantMessage]);
    setInput('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-full bg-tealnight px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-olive/60"
      >
        {isOpen ? 'Cerrar asistente' : 'Chat IA'}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25 }}
            className="mt-3 w-80 rounded-3xl bg-white/95 p-4 shadow-soft backdrop-blur"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-charcoal">Asistente IA</p>
                <p className="text-xs text-charcoal/70">Cristhyan y Alonso Data</p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-charcoal/70 transition hover:text-olive"
                aria-label="Cerrar chat"
              >
                ×
              </button>
            </div>
            <div
              ref={chatRef}
              className="mt-4 h-72 space-y-3 overflow-y-auto pr-2 text-sm"
              aria-live="polite"
            >
              {messages.map((message, index) => (
                <div
                  key={`message-${index}`}
                  className={`max-w-[90%] rounded-2xl px-4 py-3 text-sm shadow ${
                    message.role === 'assistant'
                      ? 'bg-beige/80 text-charcoal'
                      : 'ml-auto bg-olive text-white'
                  }`}
                >
                  {message.content}
                </div>
              ))}
            </div>
            <form onSubmit={handleSend} className="mt-3 space-y-2">
              <label htmlFor="chat-message" className="sr-only">
                Escribe tu mensaje para el asistente IA
              </label>
              <textarea
                id="chat-message"
                rows={2}
                className="w-full resize-none rounded-2xl border border-cloud/70 px-3 py-2 text-sm focus:border-olive focus:ring-olive"
                placeholder="Pregúntame sobre turismo o renta"
                value={input}
                onChange={(event) => setInput(event.target.value)}
              ></textarea>
              <button
                type="submit"
                className="w-full rounded-full bg-tealnight px-4 py-2 text-sm font-semibold text-white transition hover:bg-olive"
              >
                Enviar
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatIA;
