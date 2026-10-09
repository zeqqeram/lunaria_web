import { supabase } from '../lib/supabaseClient.js';

export async function getProfile(userId) {
    const { data, error } = await supabase
        .from('profiles')
        .select('id, display_name, avatar, medals')
        .eq('id', userId)
        .single();

    if (error) {
        throw error;
    }

    return data;
}

export async function updateProfile(userId, changes) {
    const allowedFields = {};

    if (typeof changes.display_name === 'string') {
        allowedFields.display_name = changes.display_name.trim();
    }

    if (
        changes.avatar !== undefined &&
        changes.avatar !== null &&
        typeof changes.avatar === 'object' &&
        !Array.isArray(changes.avatar)
    ) {
        allowedFields.avatar = changes.avatar;
    }

    if (Object.keys(allowedFields).length === 0) {
        throw new Error('No hay cambios válidos para guardar.');
    }

    const { data, error } = await supabase
        .from('profiles')
        .update(allowedFields)
        .eq('id', userId)
        .select('id, display_name, avatar, medals')
        .single();

    if (error) {
        throw error;
    }

    return data;
}