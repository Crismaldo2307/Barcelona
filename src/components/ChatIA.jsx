import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const initialMessages = [
  {
    role: 'assistant',
    content:
      'Hola, soy la analista virtual del proyecto. Pregunta sobre turismo, regulación o cómo afecta al alquiler y te responderé con insights.'
  }
];

const ChatIA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const toggleChat = () => setIsOpen((prev) => !prev);

  const handleSend = async (event) => {
    event.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY || 'TU_API_KEY_AQUI'}`
        },
        body: JSON.stringify({
          model: import.meta.env.VITE_OPENAI_MODEL || 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content:
                'Eres una analista urbana que explica con datos cómo el turismo afecta a las rentas en Barcelona. Usa un tono cercano y profesional.'
            },
            ...messages,
            userMessage
          ],
          temperature: 0.4,
          max_tokens: 280
        })
      });

      if (!response.ok) {
        throw new Error('No se pudo conectar con el servicio de IA.');
      }

      const data = await response.json();
      const assistantReply =
        data?.choices?.[0]?.message?.content ||
        'No pude obtener datos en este momento, pero puedo ayudarte a interpretar los gráficos disponibles.';

      setMessages((prev) => [...prev, { role: 'assistant', content: assistantReply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            'No he podido conectar con la API de OpenAI. Revisa tu clave en VITE_OPENAI_API_KEY y vuelve a intentarlo. Mientras tanto, consulta la sección de datos para más contexto.'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleChat}
        className="flex items-center gap-2 rounded-full bg-mediterranean px-5 py-3 font-semibold text-white shadow-lg shadow-mediterranean/40 transition hover:scale-105"
      >
        <span>{isOpen ? 'Cerrar chat' : 'Habla con la IA'}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="mt-4 w-80 rounded-3xl bg-white p-4 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-midnight">Chat inteligente</h4>
              <button onClick={toggleChat} className="text-sm text-slate-500 hover:text-midnight">
                ×
              </button>
            </div>
            <div className="mt-3 h-72 space-y-3 overflow-y-auto pr-2 text-sm">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`rounded-2xl px-4 py-3 shadow-sm ${
                    message.role === 'assistant'
                      ? 'bg-mediterranean/10 text-midnight'
                      : 'ml-auto bg-mediterranean text-white'
                  }`}
                >
                  {message.content}
                </div>
              ))}
              {loading && <p className="text-center text-xs text-slate-400">Pensando...</p>}
            </div>
            <form onSubmit={handleSend} className="mt-3 space-y-2">
              <textarea
                rows={2}
                className="w-full resize-none rounded-2xl border border-slate-200 px-3 py-2 text-sm focus:border-mediterranean focus:ring-mediterranean"
                placeholder="¿Cómo afecta Airbnb en Ciutat Vella?"
                value={input}
                onChange={(event) => setInput(event.target.value)}
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-midnight px-4 py-2 text-sm font-semibold text-white transition hover:bg-mediterranean disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? 'Enviando…' : 'Enviar'}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatIA;
