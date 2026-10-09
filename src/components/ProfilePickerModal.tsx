import React, { useRef, useState } from 'react';
import { X, Check, Upload, Image as ImageIcon, Sparkles, RefreshCw } from 'lucide-react';
import { PROFILE_PHOTOS } from '../data/portfolioData';
import { ProfilePhotoOption } from '../types';

interface ProfilePickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPhotoUrl: string;
  onSelectPhoto: (url: string) => void;
}

export const ProfilePickerModal: React.FC<ProfilePickerModalProps> = ({
  isOpen,
  onClose,
  currentPhotoUrl,
  onSelectPhoto
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [customPhotos, setCustomPhotos] = useState<ProfilePhotoOption[]>(() => {
    try {
      const saved = localStorage.getItem('santhosh_custom_photos');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const base64Url = reader.result as string;
      const newOption: ProfilePhotoOption = {
        id: `custom-${Date.now()}`,
        name: file.name.replace(/\.[^/.]+$/, '').slice(0, 20),
        description: 'Uploaded from your device',
        tag: 'User Upload',
        url: base64Url
      };

      const updated = [newOption, ...customPhotos];
      setCustomPhotos(updated);
      try {
        localStorage.setItem('santhosh_custom_photos', JSON.stringify(updated.slice(0, 3)));
      } catch {
        // Handle storage quota if large
      }
      onSelectPhoto(base64Url);
    };
    reader.readAsDataURL(file);
  };

  const allOptions = [...PROFILE_PHOTOS, ...customPhotos];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl p-6 sm:p-8 rounded-2xl bg-[#090c13] border border-cyan-500/30 shadow-2xl space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">Profile Photo Picker</h3>
              <p className="text-xs text-slate-400">Select an authentic photo of Santhosh or upload a new one</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close profile picker"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Currently Active Display */}
        <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-white/[0.06]">
          <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-cyan-400 shrink-0 bg-slate-800 shadow-md">
            <img
              src={currentPhotoUrl}
              alt="Active Santhosh Profile"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">Active Portfolio Photo</span>
            <div className="text-sm font-semibold text-white">Santhoshkumar R</div>
            <p className="text-xs text-slate-400">This photo is live across your portfolio profile card.</p>
          </div>
        </div>

        {/* Gallery Options */}
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase text-slate-400">Choose Available Portrait</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {allOptions.map((opt) => {
              const isSelected = currentPhotoUrl === opt.url;
              return (
                <div
                  key={opt.id}
                  onClick={() => onSelectPhoto(opt.url)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center gap-3 relative group ${
                    isSelected
                      ? 'bg-cyan-950/30 border-cyan-400 shadow-sm shadow-cyan-500/20'
                      : 'bg-slate-900/40 border-white/[0.06] hover:border-slate-600 hover:bg-slate-900/80'
                  }`}
                >
                  <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 border border-white/10 bg-slate-800">
                    <img
                      src={opt.url}
                      alt={opt.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0 space-y-0.5">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-xs font-bold text-white truncate group-hover:text-cyan-300">
                        {opt.name}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 line-clamp-1">{opt.description}</p>
                    <span className="text-[10px] font-mono text-cyan-300">{opt.tag}</span>
                  </div>

                  {isSelected && (
                    <div className="w-5 h-5 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Upload Custom Photo Option */}
        <div className="pt-2 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept="image/*"
            className="hidden"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
          >
            <Upload className="w-4 h-4 text-cyan-400" />
            <span>Upload From Device</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
          >
            Apply &amp; Done
          </button>
        </div>
      </div>
    </div>
  );
};
