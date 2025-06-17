'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const TeamMember = ({ name, position, bio, image, delay }: { 
  name: string;
  position: string;
  bio: string;
  image: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay || 0 }}
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-xl shadow-md overflow-hidden"
    >
      <div className="relative h-48 w-full">
        <Image 
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-green-600 mb-2">{position}</p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </motion.div>
  );
};

export default TeamMember;