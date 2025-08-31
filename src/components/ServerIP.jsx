import React, { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import { FaServer, FaUsers, FaCopy, FaCheck, FaQuestionCircle } from 'react-icons/fa';

const ServerIP = () => {
  const serverIp = 'play.deltcraft.net';
  const [status, setStatus] = useState({ loading: true, online: false, players: {} });
  const [isCopied, setIsCopied] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    fetch(`https://api.mcapi.us/server/status?ip=${serverIp}`)
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          setStatus({
            loading: false,
            online: data.online,
            players: { now: data.players.now, max: data.players.max },
          });
        } else {
          setStatus({ loading: false, online: false, players: {} });
        }
      })
      .catch(() => {
        setStatus({ loading: false, online: false, players: {} });
      });
  }, [serverIp]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(serverIp);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <section id="serverip" className="min-h-screen w-full flex items-center bg-gray-800 text-white scroll-mt-24">
      <div className="container mx-auto px-6 py-10">
        <div className="text-center mb-12">
          {/* Diperbarui: Judul diberi warna teal */}
          <h2 className="text-4xl font-bold text-teal-400">Gabung Petualangan</h2>
          <p className="text-lg text-gray-400 mt-2">Satu langkah lagi untuk masuk ke dunia DeltCraft.</p>
        </div>
        <div className="max-w-4xl mx-auto bg-gray-900/50 rounded-xl shadow-2xl p-6 md:p-8 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-400 tracking-wider">ALAMAT SERVER</label>
                <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg">
                  <span className="flex-grow text-xl md:text-2xl font-mono text-teal-300 break-all">{serverIp}</span>
                  <button onClick={copyToClipboard} className="bg-teal-600 hover:bg-teal-700 p-3 rounded-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-teal-400">
                    {isCopied ? <FaCheck size={20} /> : <FaCopy size={20} />}
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="font-semibold text-gray-400 text-sm mb-2">STATUS</p>
                  {status.loading ? (
                    <p className="text-yellow-400">Mengecek...</p>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <span className={`h-3 w-3 rounded-full ${status.online ? 'bg-green-500' : 'bg-red-500'}`}></span>
                      <p className={`font-bold ${status.online ? 'text-green-400' : 'text-red-400'}`}>
                        {status.online ? 'Online' : 'Offline'}
                      </p>
                    </div>
                  )}
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="font-semibold text-gray-400 text-sm mb-2">PEMAIN</p>
                  {status.loading ? (
                     <p className="text-yellow-400">- / -</p>
                  ) : (
                    <p className={`font-bold ${status.online ? 'text-white' : 'text-gray-500'}`}>
                      {status.online ? `${status.players.now} / ${status.players.max}` : '0 / 0'}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="hidden md:flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg">
              <div className="bg-white p-3 rounded-md">
                <QRCode value={serverIp} size={128} bgColor="#FFFFFF" fgColor="#111827" />
              </div>
               <p className="text-xs text-gray-400 mt-3">Bagikan IP dengan cepat!</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <button onClick={() => setShowHelp(!showHelp)} className="flex items-center gap-2 mx-auto text-gray-400 hover:text-white transition-colors">
            <FaQuestionCircle />
            <span>Butuh bantuan cara bergabung?</span>
          </button>
          {showHelp && (
            <div className="max-w-2xl mx-auto mt-4 text-left bg-gray-800 p-6 rounded-lg text-gray-300 animate-fadeIn">
              <h3 className="font-bold text-lg mb-3">Cara Bergabung ke Server:</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Buka Minecraft: Java Edition.</li>
                <li>Klik tombol **"Multiplayer"**, lalu **"Add Server"**.</li>
                <li>Di bagian **"Server Name"**, isi dengan "DeltCraft".</li>
                <li>Di bagian **"Server Address"**, masukkan IP: <code className="bg-gray-900 px-2 py-1 rounded text-teal-300">{serverIp}</code></li>
                <li>Klik **"Done"**, lalu pilih server DeltCraft dan klik **"Join Server"**. Selamat bermain!</li>
              </ol>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServerIP;