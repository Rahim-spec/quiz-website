let selectedBundlePrice = 129;
let currentQuantity = 1;
let currentShippingFee = 0;
const TAX_RATE = 0.08;

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

function selectBundle(bundleType, price) {
  selectedBundlePrice = price;
  
  const bSingle = document.getElementById('bundle-single');
  const bDuo = document.getElementById('bundle-duo');
  const bTrio = document.getElementById('bundle-trio');
  const bundleTitle = document.getElementById('selected-bundle-title');

  if (!bSingle || !bDuo || !bTrio) return;

  [bSingle, bDuo, bTrio].forEach(card => {
    card.classList.remove('border-primary');
    card.classList.add('border-transparent');
  });

  if (bundleType === 'single') {
    bSingle.classList.add('border-primary');
    bSingle.classList.remove('border-transparent');
    if (bundleTitle) bundleTitle.innerText = 'Aura Mist Standard Set';
  } else if (bundleType === 'duo') {
    bDuo.classList.add('border-primary');
    bDuo.classList.remove('border-transparent');
    if (bundleTitle) bundleTitle.innerText = 'Duo Sanctuary Pack';
  } else if (bundleType === 'trio') {
    bTrio.classList.add('border-primary');
    bTrio.classList.remove('border-transparent');
    if (bundleTitle) bundleTitle.innerText = 'Whole Home Suite';
  }

  recalculateTotals();
}

function adjustQty(amount) {
  currentQuantity = Math.max(1, currentQuantity + amount);
  const qtyElem = document.getElementById('item-qty');
  if (qtyElem) qtyElem.innerText = currentQuantity;
  recalculateTotals();
}

function updateShipping(fee) {
  currentShippingFee = fee;
  recalculateTotals();
}

function recalculateTotals() {
  const subtotal = selectedBundlePrice * currentQuantity;
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax + currentShippingFee;

  const subtotalElem = document.getElementById('summary-subtotal');
  const shippingElem = document.getElementById('summary-shipping');
  const taxElem = document.getElementById('summary-tax');
  const totalElem = document.getElementById('summary-total');
  const btnTotalElem = document.getElementById('btn-total');

  if (subtotalElem) subtotalElem.innerText = `$${subtotal.toFixed(2)}`;
  if (shippingElem) shippingElem.innerText = currentShippingFee === 0 ? 'FREE' : `$${currentShippingFee.toFixed(2)}`;
  if (taxElem) taxElem.innerText = `$${tax.toFixed(2)}`;
  if (totalElem) totalElem.innerText = `$${total.toFixed(2)}`;
  if (btnTotalElem) btnTotalElem.innerText = `$${total.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', () => {
  console.log("Aura Mist Studio: Script Loaded.");
  const form = document.getElementById('checkout-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const firstName = document.getElementById('first-name').value;
      const totalAmount = document.getElementById('summary-total').innerText;
      
      alert(`Thank you for your order, ${firstName}!\n\nYour total is ${totalAmount}. An order confirmation email has been dispatched.`);
    });
  }
});