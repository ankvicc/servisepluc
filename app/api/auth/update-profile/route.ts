export const dynamic = 'force-dynamic'; // Важно для API роутов
export const fetchCache = 'force-no-store'; // Отключает кэширование

import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const { userId, name, phone } = await request.json();

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        name,
        phone
      }
    });

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    console.error('Update profile error:', error);
    return NextResponse.json(
      { error: 'Ошибка при обновлении профиля' },
      { status: 500 }
    );
  }
}