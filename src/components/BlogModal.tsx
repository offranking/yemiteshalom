import React from 'react';
import { X, Calendar, User, Clock, Share2 } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onBookCatering: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({
  post,
  onClose,
  onBookCatering
}) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl border border-sky-100 w-full max-w-2xl overflow-hidden my-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-slate-900/50 hover:bg-slate-900/80 text-white rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative h-64 w-full">
          <img
            src={post.featuredImage}
            alt={post.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="px-2.5 py-1 bg-sky-600 rounded-full text-xs font-semibold uppercase tracking-wider">
              {post.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif-title mt-2 leading-tight">{post.title}</h2>
            <div className="flex items-center gap-4 text-xs text-sky-100 mt-2">
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
              <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {post.author}</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-4 max-h-[60vh] overflow-y-auto text-slate-700 leading-relaxed text-sm">
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}

          <div className="p-4 bg-sky-50 rounded-xl border border-sky-100 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-slate-800 text-sm">Planning an upcoming event?</p>
              <p className="text-xs text-slate-500">Let SHALOM SUPER KITCHEN handle your food and beverage arrangements seamlessly.</p>
            </div>
            <button
              onClick={() => {
                onClose();
                onBookCatering();
              }}
              className="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-lg transition-colors shrink-0"
            >
              Get Catering Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
