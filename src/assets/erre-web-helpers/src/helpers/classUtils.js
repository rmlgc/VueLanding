// elClassToggle, elClassAdd, elClassRemove
// --- classUtils.js ---
export function elClassToggle(el, className)
{
    const list = typeof className === 'string' ? className.split(' ') : className;
    list.forEach(c => el.classList.toggle(c));
}

export function elClassAdd(el, className)
{
    const list = typeof className === 'string' ? className.split(' ') : className;
    list.forEach(c => el.classList.add(c));
}

export function elClassRemove(el, className)
{
    const list = typeof className === 'string' ? className.split(' ') : className;
    list.forEach(c => el.classList.remove(c));
}