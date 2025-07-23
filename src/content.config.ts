// src/content.config.ts
import { defineCollection } from 'astro:content';
import { supabase } from './lib/supabase';

async function loadSiteIdentity() {
  try {
    // Skip Supabase if not configured
    if (!import.meta.env.SUPABASE_URL) {
      console.log('Supabase not configured, using fallback data');
      return [];
    }
    
    const { data, error } = await supabase.from('siteidentity').select('*');
    if (error) {
      console.error('Erreur loading siteidentity:', error);
      return [];
    }
    return data.map(item => ({
      id: item.id,
      slug: item.nom_site.toLowerCase().replace(/\s+/g, '-'),
      body: '',
      data: item,
    }));
  } catch (e) {
    console.error('Error in loadSiteIdentity:', e);
    return [];
  }
}

async function loadDesign() {
  try {
    // Skip Supabase if not configured
    if (!import.meta.env.SUPABASE_URL) {
      console.log('Supabase not configured, using fallback data');
      return [];
    }
    
    const { data, error } = await supabase.from('design').select('*');
    if (error) {
      console.error('Erreur loading design:', error);
      return [];
    }
    return data.map(item => ({
      id: item.id,
      slug: item.nom_du_theme.toLowerCase().replace(/\s+/g, '-'),
      body: '',
      data: item,
    }));
  } catch (e) {
    console.error('Error in loadDesign:', e);
    return [];
  }
}

async function loadOrganizations() {
  try {
    // Skip Supabase if not configured
    if (!import.meta.env.SUPABASE_URL) {
      console.log('Supabase not configured, using fallback data');
      return [];
    }
    
    const { data, error } = await supabase.from('organizations').select('*');
    if (error) {
      console.error('Erreur loading organizations:', error);
      return [];
    }
    return data.map(item => ({
      id: item.id,
      slug: item.name.toLowerCase().replace(/\s+/g, '-'),
      body: '',
      data: item,
    }));
  } catch (e) {
    console.error('Error in loadOrganizations:', e);
    return [];
  }
}

async function loadUsers() {
  try {
    // Skip Supabase if not configured
    if (!import.meta.env.SUPABASE_URL) {
      console.log('Supabase not configured, using fallback data');
      return [];
    }
    
    const { data, error } = await supabase.from('users').select('*');
    if (error) {
      console.error('Erreur loading users:', error);
      return [];
    }
    return data.map(item => ({
      id: item.id,
      slug: item.User.toLowerCase(),
      body: '',
      data: item,
    }));
  } catch (e) {
    console.error('Error in loadUsers:', e);
    return [];
  }
}

export const collections = {
  siteidentity: defineCollection({ loader: loadSiteIdentity }),
  design: defineCollection({ loader: loadDesign }),
  organizations: defineCollection({ loader: loadOrganizations }),
  users: defineCollection({ loader: loadUsers }),
};
