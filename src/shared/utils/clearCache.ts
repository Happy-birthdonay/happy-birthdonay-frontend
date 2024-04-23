'use server';

import { revalidatePath } from 'next/cache';

export async function clearCache(pathName: string) {
  revalidatePath(pathName);
}
