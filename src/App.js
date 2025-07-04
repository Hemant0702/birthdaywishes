import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./components/Button";
import Confetti from "react-confetti";

export default function BirthdayApp() {
  const [page, setPage] = useState(0);
  const [showConfetti, setShowConfetti] = useState(true);
  const [isCardOpen, setIsCardOpen] = useState(false);

  
  const goToNext = () => setPage((p) => p + 1);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-300 via-yellow-200 to-red-200 transition-all duration-1000">
      {showConfetti && page === 0 && <Confetti numberOfPieces={300} recycle={false} />}

      {page === 0 && (
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-extrabold text-purple-700 mb-6 drop-shadow-lg animate-bounce">
            🎉 Happy Birthday Varsha! 🎉
          </h1>
          <p className="text-xl text-gray-700 mb-4">A surprise is waiting for you...</p>
          <Button
            onClick={() => {
              setShowConfetti(false);
              goToNext();
            }}
            className="bg-pink-500 hover:bg-pink-600"
          >
            Start
          </Button>
        </motion.div>
      )}

      {page === 1 && (
        <motion.div
          className="text-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-yellow-600 mb-4 animate-pulse">
            ✨ Let the lights shine! ✨
          </h2>
          <div className="flex justify-center gap-4 mb-4">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full animate-ping"
                style={{ backgroundColor: ["#ff4d4d", "#ffa64d", "#ffff66", "#66ff66", "#66b3ff"][i % 5] }}
              ></div>
            ))}
          </div>
          <audio autoPlay loop>
            <source src={`${process.env.PUBLIC_URL}/birthday_music.mp3`} type="audio/mpeg" />
          </audio>
          <Button onClick={goToNext} className="mt-6 bg-yellow-500 hover:bg-yellow-600">
            Next
          </Button>
        </motion.div>
      )}

      {page === 2 && (
        <motion.div
          className="text-center"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <h2 className="text-4xl font-bold text-pink-600 mb-4">🎂 Here's your cake!</h2>
          <img src={`${process.env.PUBLIC_URL}/cake.jpg`} alt="Cake" className="mx-auto mb-4 w-64 animate-wiggle" />
          <div className="flex justify-center gap-4">
          <img src={`${process.env.PUBLIC_URL}/doraemon.jpg`} alt="Doraemon" className="w-32 animate-bounce" />
          <img src={`${process.env.PUBLIC_URL}/shinchan.jpg`} alt="Shinchan" className="w-32 animate-bounce delay-200" />
          </div>
          <Button onClick={goToNext} className="mt-6 bg-red-400 hover:bg-red-500">
            Next
          </Button>
        </motion.div>
      )}

      {page === 3 && (
      <motion.div
      className="flex flex-col items-center justify-center h-screen px-4 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-pink-600 mb-6">
        Happy Birthday, miss Enchanting
      </h2>
    
      <div className="flex-1 flex items-center justify-center max-h-[60vh]">
        <img
          src={`${process.env.PUBLIC_URL}/bday_girl.jpg`}
          alt="Birthday Girl"
          className="max-h-full w-auto rounded-xl shadow-xl"
        />
      </div>
    
      <Button onClick={goToNext} className="mt-8 bg-indigo-500 hover:bg-pink-600 text-white">
        View Card
      </Button>
    </motion.div>
    
    
      )}

{page === 4 && (
  <motion.div
    className="flex flex-col items-center justify-center min-h-screen text-center px-4"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-4xl font-bold text-green-600 mb-6"> A Letter For You ✨ </h2>

    {!isCardOpen ? (
      <motion.div
        className="w-80 h-48 bg-white rounded-xl shadow-lg border-4 border-green-400 flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        onClick={() => setIsCardOpen(true)}
      >
        <p className="text-lg text-gray-600">Click to Open</p>
      </motion.div>
    ) : (
      <motion.div
        className="w-[90%] md:w-2/3 bg-white rounded-2xl shadow-2xl p-6 border-4 border-green-400 text-left max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
        Hi, happy birthday once again!
        I hope your day was filled with all the joy and calm it deserves — something as wonderful as you.
        People often wear outfits to stand out, but you have this quiet magic — you make whatever you wear look better. It’s not just about fashion, it’s the way you carry yourself, the way you smile. In a world where everyone’s trying to to stand out, your smile feels like something rare — something real.
        I don’t really know how to say this without sounding strange, but… I hope that smile — someday — becomes a kind of apricity in my life. A quiet warmth that lingers — and perhaps, if fate allows, I might be someone who adds to it, even if only for a while.
        Also, I do have a small gift for you. But honestly, its meaning depends more on what you feel than what I give. I know this might seem out of the blue, and that’s completely fair — but maybe, just maybe, today was the right time to say all this.
        So yes, it’s your birthday. But quietly, on the side, a wish has already been made.
        If this brought even a small smile to your face, then I’m genuinely glad I shared it.
        And if not — that’s okay too. I completely understand. No pressure, no expectations.
        I’ll leave this here, softly — like a thought placed gently into the quiet. Whatever follows, I’ll carry this moment with quiet hope, and nothing more.

        </p>
      </motion.div>
    )}
  </motion.div>
)}

    </div>
  );
}



// Hi, happy birthday once again!
// I hope your day was filled with all the joy and calm it deserves — something as wonderful as you.
// People often wear outfits to stand out, but you have this quiet magic — you make whatever you wear look better. It’s not just about fashion, it’s the way you carry yourself, the way you smile. In a world where everyone’s trying to to stand out, your smile feels like something rare — something real.
// I don’t really know how to say this without sounding strange, but… I hope that smile — someday — becomes a kind of apricity in my life. A quiet warmth that lingers — and perhaps, if fate allows, I might be someone who adds to it, even if only for a while.
// Also, I do have a small gift for you. But honestly, its meaning depends more on what you feel than what I give. I know this might seem out of the blue, and that’s completely fair — but maybe, just maybe, today was the right time to say all this.
// So yes, it’s your birthday. But quietly, on the side, a wish has already been made.
// If this brought even a small smile to your face, then I’m genuinely glad I shared it.
// And if not — that’s okay too. I completely understand. No pressure, no expectations.
// I’ll leave this here, softly — like a thought placed gently into the quiet. Whatever follows, I’ll carry this moment with quiet hope, and nothing more.
