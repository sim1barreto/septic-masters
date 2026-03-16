'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import type { Block } from '@/lib/blocks';

type TeamMember = { name: string; role: string; experience: string; initials: string; color: string };
type Props = { attrs: Record<string, unknown>; innerBlocks: Block[] };

export function TeamGridBlock({ attrs }: Props) {
  const {
    sectionLabel = 'Meet the Team',
    headline = 'The Experts Behind Every Job',
    members = [],
  } = attrs as Record<string, unknown>;

  const memberList = members as TeamMember[];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 rounded-full bg-[#1E7A45]/10 text-[#1E7A45] text-sm mb-4 font-bold"
          >
            {sectionLabel as string}
          </span>
          <h2
            className="text-[#0B2545]"
            style={{ fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
          >
            {headline as string}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {memberList.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-8 rounded-2xl bg-[#F7F9F8] border border-[#E2E8F0] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5 text-white text-xl font-extrabold"
                style={{ background: `linear-gradient(135deg, ${member.color}, ${member.color}99)` }}
              >
                {member.initials}
              </div>
              <h3 className="text-[#0B2545] mb-1 font-bold">{member.name}</h3>
              <div className="text-[#718096] text-sm mb-2">{member.role}</div>
              <div
                className="flex items-center justify-center gap-1.5 text-xs font-semibold"
                style={{ color: member.color }}
              >
                <Award className="w-3.5 h-3.5" />
                {member.experience} experience
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
