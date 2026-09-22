export type VirtueId =
  | 'humildade'
  | 'pobreza'
  | 'caridade'
  | 'coragem'
  | 'oracao'
  | 'perdao';

export interface Virtue {
  id: VirtueId;
  name: string;
  icon: string;
  description: string;
}

export interface SceneChoice {
  text: string;
  next: string;
  virtueAward?: VirtueId;
}

export interface Scene {
  id: string;
  speaker?: string;
  text: string;
  /** key into the chapter's backgrounds palette, falls back to theme background */
  backgroundTone?: 'dawn' | 'night' | 'chapel' | 'forest' | 'town';
  choices?: SceneChoice[];
  /** used when a scene has no choices: tap to continue to this scene id */
  next?: string;
  virtueAward?: VirtueId;
  isEnding?: boolean;
}

export interface Chapter {
  id: string;
  title: string;
  saintId: string;
  startSceneId: string;
  scenes: Record<string, Scene>;
}

export type SaintStatus = 'available' | 'comingSoon';

export interface Saint {
  id: string;
  name: string;
  title: string;
  years: string;
  summary: string;
  status: SaintStatus;
  accentColor: string;
  chapterId?: string;
}
