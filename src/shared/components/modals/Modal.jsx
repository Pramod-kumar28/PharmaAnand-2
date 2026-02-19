// src/components/common/Modal.jsx
import React, { useEffect, useRef } from 'react'

const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  size = 'md',
  showHeader = true,
  showCloseButton = true,
  className = '',
  onBack,
  contentClassName = '',
  preventScroll = true,
  position = 'center' // 'top' or 'center' - default to center
}) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (preventScroll && isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      if (preventScroll) {
        document.body.style.overflow = 'unset';
      }
    };
  }, [isOpen, preventScroll]);

  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
    full: 'max-w-full'
  };

  const positionClasses = {
    top: 'items-start pt-8',
    center: 'items-center'
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    // MAIN ISSUE: z-50 might not be enough. Increase it
    <div 
      className="fixed inset-0 z-[9999]"
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
      
      {/* Modal Container - Scroll container */}
      <div className={`relative h-full overflow-y-auto ${positionClasses[position]}`}>
        <div className={`flex min-h-full justify-center p-4 mx-auto ${sizeClasses[size]} w-full`}>
          <div 
            ref={modalRef}
            className={`relative bg-white rounded-xl shadow-2xl w-full transform transition-all ${className}`}
            onClick={e => e.stopPropagation()}
          >
            {/* Header - Fixed */}
            {showHeader && (
              <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-white rounded-t-xl sticky top-0 z-10">
                <div className="flex items-center gap-3">
                  {onBack && (
                    <button
                      onClick={onBack}
                      className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 -ml-2"
                    >
                      ←
                    </button>
                  )}
                  <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                </div>
                {showCloseButton && (
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-600 transition-colors text-2xl -mr-2 p-2 hover:bg-gray-100 rounded-lg"
                    aria-label="Close"
                  >
                    ×
                  </button>
                )}
              </div>
            )}

            {/* Content Area - Scrollable */}
            <div className={contentClassName}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;