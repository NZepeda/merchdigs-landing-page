export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-slate-light/30 border-t border-slate/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-charcoal mb-2">Merchdigs</h3>
            <p className="text-slate">A better marketplace for music fans.</p>
          </div>
          
          <div className="text-sm text-slate space-y-2">
            <p>You can unsubscribe at any time.</p>
            <p>© 2024 Merchdigs. Built for the music community.</p>
          </div>
          
          {/* Placeholder for future social links */}
          <div className="mt-6 flex justify-center space-x-6">
            <div className="w-8 h-8 bg-slate/20 rounded-full"></div>
            <div className="w-8 h-8 bg-slate/20 rounded-full"></div>
            <div className="w-8 h-8 bg-slate/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};