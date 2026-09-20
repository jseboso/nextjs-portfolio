import { useLayoutEffect, useState } from 'react'

const useTimelineLine = (containerRef) => {
    const [line, setLine] = useState({ top: 0, height: 0 })

    useLayoutEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const measure = () => {
            const icons = container.querySelectorAll('[data-timeline-icon]');
            if (icons.length === 0) return;

            const containerTop = container.getBoundingClientRect().top;
            const first = icons[0].getBoundingClientRect();
            const last = icons[icons.length - 1].getBoundingClientRect();

            const top = (first.top + first.bottom) / 2 - containerTop;
            const bottom = (last.top + last.bottom) / 2 - containerTop;

            setLine({ top, height: bottom - top });
        };

        measure();

        const resizeObserver = new ResizeObserver(measure);
        resizeObserver.observe(container);

        return () => resizeObserver.disconnect();
    }, [containerRef])

    return line;
}

export default useTimelineLine
