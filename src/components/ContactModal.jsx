import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { FillingButton } from './ui';

export default function ContactModal({ isOpen, onClose }) {
  const [status, setStatus] = useState('idle');

  useLockBodyScroll();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.target);

    formData.append('access_key', '572d74d4-e661-4101-9ee0-0b07ddc2160a');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        setTimeout(() => {
          onClose();
          setStatus('idle');
        }, 3000); // Fecha sozinho após 3 segundos
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-[#050505]/95 backdrop-blur-md flex items-center justify-center p-4"
    >
      <div className="w-full max-w-2xl bg-[#0a0a0a] border border-white/10 p-8 md:p-12 relative">
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-neutral-500 hover:text-[#ce1e1e] font-mono text-xs uppercase transition-colors"
        >
          [ Close ]
        </button>

        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-2">
          Comece um <span className="text-[#ce1e1e]">Projeto</span>
        </h2>
        <p className="text-neutral-500 font-mono text-xs md:text-sm mb-8 uppercase tracking-widest">
          // Direto para nossa caixa de entrada
        </p>

        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center"
          >
            <h3 className="text-2xl text-white font-black uppercase tracking-widest mb-2">
              Mensagem Enviada.
            </h3>
            <p className="text-neutral-500 font-mono text-sm">
              Retornaremos o mais rápido possível.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 font-mono">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                required
                placeholder="SEU NOME"
                className="bg-transparent border-b border-white/20 pb-2 text-sm text-white focus:outline-none focus:border-[#ce1e1e] transition-colors placeholder:text-neutral-700"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="SEU EMAIL"
                className="bg-transparent border-b border-white/20 pb-2 text-sm text-white focus:outline-none focus:border-[#ce1e1e] transition-colors placeholder:text-neutral-700"
              />
            </div>

            <input
              type="text"
              name="subject"
              required
              placeholder="TIPO DE PROJETO (EX: VIDEOCLIPE, EDITORIAL)"
              className="bg-transparent border-b border-white/20 pb-2 text-sm text-white focus:outline-none focus:border-[#ce1e1e] transition-colors placeholder:text-neutral-700 mt-4"
            />

            <textarea
              name="message"
              required
              rows="4"
              placeholder="FALE SOBRE A SUA IDEIA..."
              className="bg-transparent border-b border-white/20 pb-2 text-sm text-white focus:outline-none focus:border-[#ce1e1e] transition-colors placeholder:text-neutral-700 resize-none mt-4"
            ></textarea>

            <FillingButton
              text={status === 'loading' ? 'ENVIANDO...' : 'ENVIAR MENSAGEM'}
              type="submit"
              disabled={status === 'loading'}
              className="mt-8 bg-white text-black py-4 px-8 font-black uppercase tracking-widest text-sm hover:bg-[#ce1e1e] hover:text-white transition-colors disabled:opacity-50"
            />

            {status === 'error' && (
              <p className="text-[#ce1e1e] text-xs text-center mt-2">
                Erro ao enviar. Tente novamente.
              </p>
            )}
          </form>
        )}
      </div>
    </motion.div>
  );
}
