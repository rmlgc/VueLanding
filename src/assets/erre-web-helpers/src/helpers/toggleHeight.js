// toggleHeight, setupToggleHeightOnClick
// --- toggleHeight.js ---
import { elClassToggle } from './classUtils.js';

export function toggleHeight(el, options = {})
{
    const defaultOpts = {
        collapsedClass: 'is-collapsed',
        duration: 300,
        easing: 'ease'
    };
    const cfg = { ...defaultOpts, ...options };
    console.log(el);
    const isCollapsed = el.classList.contains(cfg.collapsedClass);
    const startH = el.offsetHeight;
    const targetH = isCollapsed
        ? (el.dataset._origHeight || el.scrollHeight)
        : 0;

    if (!el.dataset._origHeight)
    {
        el.dataset._origHeight = el.scrollHeight;
    }

    el.style.transition = `height ${ cfg.duration }ms ${ cfg.easing }`;
    el.style.overflow = 'hidden';
    el.style.height = startH + 'px';
    void el.offsetHeight;
    el.style.height = targetH + 'px';
    elClassToggle(el, cfg.collapsedClass);

    setTimeout(() =>
    {
        el.style.transition = '';
        if (!el.classList.contains(cfg.collapsedClass))
        {
            el.style.height = 'auto';
        }
    }, cfg.duration);
}

export function setupToggleHeightOnClick(selector = '[data-toggle-height]', options = {})
{
    const els = document.querySelectorAll(selector);
    if (!els.length) return;

    els.forEach(btn =>
    {
        const targetSel = btn.getAttribute('data-toggle-target');
        const tgt = targetSel ? document.querySelector(targetSel) : btn;
        const initialState = btn.getAttribute('data-toggle-initial') || 'expanded';

        if (tgt && initialState === 'collapsed')
        {
            tgt.classList.add(options.collapsedClass || 'is-collapsed');
            tgt.style.height = '0px';
        }

        const textPrefix = btn.getAttribute('data-toggle-text-prefix') || '';
        const textSuffix = btn.getAttribute('data-toggle-text-suffix') || '';
        const textPrefixAlt = btn.getAttribute('data-toggle-text-prefix-alt') || '';
        const textSuffixAlt = btn.getAttribute('data-toggle-text-suffix-alt') || '';
        const originalText = btn.getAttribute('data-toggle-text-content') || btn.textContent.trim();
        const originalTextAlt = btn.getAttribute('data-toggle-text-content-alt') || btn.textContent.trim();

        const updateText = (isCollapsed) =>
        {
            if (!textPrefix && !textSuffix && !textPrefixAlt && !textSuffixAlt) return;

            const prefix = isCollapsed ? (textPrefixAlt || textPrefix) : textPrefix;
            const suffix = isCollapsed ? (textSuffixAlt || textSuffix) : textSuffix;
            const elText = isCollapsed ? (originalTextAlt || originalText) : originalText;

            btn.textContent = `${ prefix }${ elText }${ suffix }`.trim();
        };

        if (tgt)
        {
            updateText(tgt.classList.contains(options.collapsedClass || 'is-collapsed'));
        }

        btn.addEventListener('click', () =>
        {
            if (!tgt) return;
            toggleHeight(tgt, options);
            updateText(tgt.classList.contains(options.collapsedClass || 'is-collapsed'));
        });
    });
}