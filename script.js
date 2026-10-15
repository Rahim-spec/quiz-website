/**
 * Atmosphere Simulator Mode Switcher
 */
function setAtmosphere(mode) {
  const dawnBtn = document.getElementById('tab-dawn');
  const focusBtn = document.getElementById('tab-focus');
  const duskBtn = document.getElementById('tab-dusk');

  const halo = document.getElementById('sim-halo');
  const kelvin = document.getElementById('sim-kelvin');
  const vaporRate = document.getElementById('sim-vapor-rate');
  const title = document.getElementById('sim-title');
  const desc = document.getElementById('sim-desc');
  const scent = document.getElementById('sim-scent');
  const pip = document.getElementById('sim-glow-pip');

  if (!dawnBtn || !focusBtn || !duskBtn) return;

  // Reset all buttons to default style
  [dawnBtn, focusBtn, duskBtn].forEach(btn => {
    btn.classList.remove('bg-surface-container-lowest', 'text-on-surface', 'shadow-sm');
    btn.classList.add('bg-surface-container', 'text-on-surface-variant');
  });

  if (mode === 'dawn') {
    dawnBtn.classList.add('bg-surface-container-lowest', 'text-on-surface', 'shadow-sm');
    dawnBtn.classList.remove('bg-surface-container', 'text-on-surface-variant');

    halo.className = 'w-44 h-44 rounded-full transition-all duration-700 blur-xl opacity-75 bg-secondary-container/50';
    pip.className = 'w-3.5 h-3.5 rounded-full bg-secondary-container animate-ping';
    kelvin.innerText = '4000K Daylight White';
    vaporRate.innerText = 'Vapor Output: 45ml/hr';
    title.innerText = 'Dawn Awakening Rhythm';
    desc.innerText = 'Crisp botanical rosemary & cold-pressed bergamot vaporized with 4000K daylight simulation to suppress residual sleep inertia.';
    scent.innerText = 'Nordic Pines & Citrus';
  } else if (mode === 'focus') {
    focusBtn.classList.add('bg-surface-container-lowest', 'text-on-surface', 'shadow-sm');
    focusBtn.classList.remove('bg-surface-container', 'text-on-surface-variant');

    halo.className = 'w-44 h-44 rounded-full transition-all duration-700 blur-xl opacity-75 bg-primary-fixed/60';
    pip.className = 'w-3.5 h-3.5 rounded-full bg-primary animate-ping';
    kelvin.innerText = '3200K Natural Neutral';
    vaporRate.innerText = 'Vapor Output: 30ml/hr';
    title.innerText = 'Deep Focus Flow';
    desc.innerText = 'Grounding Japanese cedarwood and wild mint designed to lower cognitive strain and increase focus.';
    scent.innerText = 'Kyoto Cedar & Mint';
  } else if (mode === 'dusk') {
    duskBtn.classList.add('bg-surface-container-lowest', 'text-on-surface', 'shadow-sm');
    duskBtn.classList.remove('bg-surface-container', 'text-on-surface-variant');

    halo.className = 'w-44 h-44 rounded-full transition-all duration-700 blur-xl opacity-90 bg-secondary/40';
    pip.className = 'w-3.5 h-3.5 rounded-full bg-secondary animate-ping';
    kelvin.innerText = '1800K Melatonin Twilight';
    vaporRate.innerText = 'Vapor Output: 15ml/hr (Whisper Pulse)';
    title.innerText = 'Dusk Restorative Slumber';
    desc.innerText = 'Zero blue-spectrum photons combined with French lavender and Roman chamomile for uninterrupted sleep recovery.';
    scent.innerText = 'Dusk Lavender & Amber';
  }
}



/**
 * Global JavaScript File for Aura Mist Studio
 */

// Atmosphere Simulator Function (Home Page)
function setAtmosphere(mode) {
  const dawnBtn = document.getElementById('tab-dawn');
  const focusBtn = document.getElementById('tab-focus');
  const duskBtn = document.getElementById('tab-dusk');

  const halo = document.getElementById('sim-halo');
  const kelvin = document.getElementById('sim-kelvin');
  const vaporRate = document.getElementById('sim-vapor-rate');
  const title = document.getElementById('sim-title');
  const desc = document.getElementById('sim-desc');
  const scent = document.getElementById('sim-scent');
  const pip = document.getElementById('sim-glow-pip');

  if (!dawnBtn || !focusBtn || !duskBtn) return;

  [dawnBtn, focusBtn, duskBtn].forEach(btn => {
    btn.classList.remove('bg-surface-container-lowest', 'text-on-surface', 'shadow-sm');
    btn.classList.add('bg-surface-container', 'text-on-surface-variant');
  });

  if (mode === 'dawn') {
    dawnBtn.classList.add('bg-surface-container-lowest', 'text-on-surface', 'shadow-sm');
    dawnBtn.classList.remove('bg-surface-container', 'text-on-surface-variant');

    if (halo) halo.className = 'w-44 h-44 rounded-full transition-all duration-700 blur-xl opacity-75 bg-secondary-container/50';
    if (pip) pip.className = 'w-3.5 h-3.5 rounded-full bg-secondary-container animate-ping';
    if (kelvin) kelvin.innerText = '4000K Daylight White';
    if (vaporRate) vaporRate.innerText = 'Vapor Output: 45ml/hr';
    if (title) title.innerText = 'Dawn Awakening Rhythm';
    if (desc) desc.innerText = 'Crisp botanical rosemary & cold-pressed bergamot vaporized with 4000K daylight simulation to suppress residual sleep inertia.';
    if (scent) scent.innerText = 'Nordic Pines & Citrus';
  } else if (mode === 'focus') {
    focusBtn.classList.add('bg-surface-container-lowest', 'text-on-surface', 'shadow-sm');
    focusBtn.classList.remove('bg-surface-container', 'text-on-surface-variant');

    if (halo) halo.className = 'w-44 h-44 rounded-full transition-all duration-700 blur-xl opacity-75 bg-primary-fixed/60';
    if (pip) pip.className = 'w-3.5 h-3.5 rounded-full bg-primary animate-ping';
    if (kelvin) kelvin.innerText = '3200K Natural Neutral';
    if (vaporRate) vaporRate.innerText = 'Vapor Output: 30ml/hr';
    if (title) title.innerText = 'Deep Focus Flow';
    if (desc) desc.innerText = 'Grounding Japanese cedarwood and wild mint designed to lower cognitive strain and increase focus.';
    if (scent) scent.innerText = 'Kyoto Cedar & Mint';
  } else if (mode === 'dusk') {
    duskBtn.classList.add('bg-surface-container-lowest', 'text-on-surface', 'shadow-sm');
    duskBtn.classList.remove('bg-surface-container', 'text-on-surface-variant');

    if (halo) halo.className = 'w-44 h-44 rounded-full transition-all duration-700 blur-xl opacity-90 bg-secondary/40';
    if (pip) pip.className = 'w-3.5 h-3.5 rounded-full bg-secondary animate-ping';
    if (kelvin) kelvin.innerText = '1800K Melatonin Twilight';
    if (vaporRate) vaporRate.innerText = 'Vapor Output: 15ml/hr (Whisper Pulse)';
    if (title) title.innerText = 'Dusk Restorative Slumber';
    if (desc) desc.innerText = 'Zero blue-spectrum photons combined with French lavender and Roman chamomile for uninterrupted sleep recovery.';
    if (scent) scent.innerText = 'Dusk Lavender & Amber';
  }
}

// Product Page Interactive Toast Notification
document.addEventListener('DOMContentLoaded', () => {
  console.log("Aura Mist Studio: Product Page Loaded Successfully.");
});