import React, { useState } from 'react';

const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  const numeroWhatsApp = '51969104933'; // <-- CAMBIA ESTO

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const textoWhatsApp = `Hola, soy ${nombre}. ${mensaje}`;
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoWhatsApp)}`;

    window.open(urlWhatsApp, '_blank');

    setNombre('');
    setMensaje('');
    setIsOpen(false);
  };

  return (
    <>
      {/* Contenedor del botón y burbuja */}
      <div style={styles.container}>
        {/* Burbuja de texto */}
        <div style={styles.bubble}>
          ¿Podemos ayudarlo?
        </div>
        
        {/* Botón flotante */}
        <button
          style={styles.floatBtn}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg viewBox="0 0 32 32" width="32" height="32">
            <path
              fill="white"
              d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-5.247 1.408 1.417-5.267-0.321-0.525c-1.331-2.197-2.037-4.73-2.037-7.321 0-7.585 6.172-13.757 13.765-13.757s13.765 6.172 13.765 13.757-6.172 13.867-13.765 13.867zM23.503 19.937c-0.393-0.197-2.327-1.148-2.688-1.279-0.361-0.131-0.623-0.197-0.885 0.197s-1.016 1.279-1.246 1.541c-0.23 0.262-0.459 0.295-0.852 0.098s-1.663-0.613-3.167-1.955c-1.171-1.045-1.962-2.336-2.191-2.729s-0.025-0.607 0.172-0.803c0.177-0.177 0.393-0.459 0.59-0.688s0.262-0.393 0.393-0.656c0.131-0.262 0.066-0.492-0.033-0.688s-0.885-2.13-1.213-2.917c-0.32-0.767-0.644-0.663-0.885-0.675-0.23-0.012-0.492-0.015-0.754-0.015s-0.688 0.098-1.049 0.492c-0.361 0.393-1.377 1.344-1.377 3.277s1.41 3.802 1.607 4.065c0.197 0.262 2.773 4.234 6.719 5.937 0.939 0.406 1.672 0.648 2.244 0.829 0.948 0.302 1.811 0.259 2.494 0.157 0.761-0.114 2.327-0.951 2.655-1.869s0.328-1.705 0.23-1.869c-0.098-0.164-0.361-0.262-0.754-0.459z"
            />
          </svg>
        </button>
      </div>

      {/* Ventana tipo chat */}
      {isOpen && (
        <div style={styles.chatWindow}>
          <div style={styles.chatHeader}>
            <h3 style={styles.headerTitle}>Envíanos un mensaje</h3>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              style={styles.closeBtn}
            >
              ×
            </button>
          </div>
          <form onSubmit={handleSubmit} style={styles.chatForm}>
            <input
              type="text"
              placeholder="Tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              style={styles.input}
            />
            <textarea
              placeholder="Tu mensaje"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              required
              rows={4}
              style={styles.textarea}
            />
            <button type="submit" style={styles.sendBtn}>
              Enviar a WhatsApp
            </button>
          </form>
        </div>
      )}
    </>
  );
};

const styles: { [k: string]: React.CSSProperties } = {
  container: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    zIndex: 1000,
  },
  bubble: {
    backgroundColor: 'white',
    color: '#333',
    padding: '10px 16px',
    borderRadius: '20px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
    fontSize: '14px',
    fontWeight: '500',
    whiteSpace: 'nowrap',
  },
  floatBtn: {
    width: '60px',
    height: '60px',
    backgroundColor: '#25D366',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.3s',
  },
  chatWindow: {
    position: 'fixed',
    bottom: '90px',
    right: '20px',
    width: '320px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
    overflow: 'hidden',
  },
  chatHeader: {
    backgroundColor: '#25D366',
    color: 'white',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    margin: 0,
    fontSize: '16px',
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '28px',
    cursor: 'pointer',
    lineHeight: 1,
  },
  chatForm: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  input: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '6px',
    fontSize: '14px',
  },
  textarea: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '6px',
    fontSize: '14px',
    resize: 'vertical' as const,
    fontFamily: 'inherit',
  },
  sendBtn: {
    backgroundColor: '#25D366',
    color: 'white',
    border: 'none',
    padding: '12px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default WhatsAppButton;
