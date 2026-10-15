import type { MessageKey } from "@/lib/messages.en";

/**
 * Testi dell'interfaccia in italiano.
 * La traduzione è al momento parziale: le chiavi mancanti
 * saranno tradotte in seguito seguendo TRANSLATING.md.
 *
 * I segnaposto, come {count} o {name}, devono rimanere invariati.
 */
export const MESSAGES_IT: Partial<Record<MessageKey, string>> = {
  "common.cancel": "Annulla",
  "common.save": "Salva",
  "common.delete": "Elimina",
  "common.rename": "Rinomina",
  "common.duplicate": "Duplica",
  "dashboard.sendToServer": "Sposta sul server",
  "common.language": "Lingua",
  "common.theme": "Tema",
  "theme.short.system": "Sistema",
  "theme.short.light": "Chiaro",
  "theme.short.dark": "Scuro",
  "theme.short.graphite": "Grafite",
  "aria.originDimensions": "Distanze dall'origine",
  "aria.moveDimensions": "Dimensioni dello spostamento",
  "aria.axisMovement": "Spostamento sull'asse {axis}",
  "aria.tapeMeasurements": "Misure del metro",
  "aria.rulerDimensions": "Dimensioni del righello",
  "aria.cornerRulerTool": "Squadra",
  "aria.deleteCornerRuler": "Rimuovi squadra",
  "aria.toggleCornerRulerMode": "Cambia punto di riferimento (estremità / punto medio)",
};
