import noUiSlider from 'nouislider';

const initRangeSliders = () => {
  const rangeSliders = document.querySelectorAll('.range-slider');

  for (let i = 0; i < rangeSliders.length; i++) {
    if (rangeSliders[i].getAttribute('data-range-slider') === 'price') {
      noUiSlider.create(rangeSliders[i], {
        start: [0, 700],
        connect: true,
        range: {
          min: 0,
          max: 900,
        },
        tooltips: [true, true],
        format: {
          to: (value) => Math.round(value).toLocaleString('ru'),
          from: (value) => Number(value),
        },
      });

      const handleUpper = rangeSliders[i].querySelector('.noUi-handle-upper');
      const tooltip = handleUpper.querySelector('.noUi-tooltip');

      rangeSliders[i].noUiSlider.on('update', () => {
        const value = rangeSliders[i].noUiSlider.getPositions();

        if (value[1] > 90) {
          tooltip.style.left = '-15px';
        } else {
          tooltip.style.left = '0';
        }
      });
    }
  }
};

export {initRangeSliders};
