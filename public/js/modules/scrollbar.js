function removeScroll() {
    const w1 = document.body.getBoundingClientRect().width;
    document.body.style.overflow = 'hidden';
    const w2 = document.body.getBoundingClientRect().width;
    document.documentElement.style.paddingInlineEnd = (w2 - w1) + 'px';
}

function resetScroll() {
    document.body.style.overflow = 'auto';
    document.documentElement.style.paddingInlineEnd = '0';
}

export { removeScroll, resetScroll }