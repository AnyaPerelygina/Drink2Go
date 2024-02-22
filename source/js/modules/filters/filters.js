import noUiSlider from 'nouislider';

const initRangeSliders = () => {
  const rangeSliders = document.querySelectorAll('.range-slider');
  const minInput = document.getElementById('minCost');
  const maxInput = document.getElementById('maxCost');

  for (let i = 0; i < rangeSliders.length; i++) {
    if (rangeSliders[i].getAttribute('data-range-slider') === 'price') {
      const slider = noUiSlider.create(rangeSliders[i], {
        start: [0, 900],
        connect: true,
        range: {
          min: 0,
          max: 1100,
        },
        tooltips: [true, true],
        format: {
          to: (value) => Math.round(value),
          from: (value) => Number(value.replace(/\D/g, '').replace(/\s/g, '')),
        },
      });

      slider.on('update', (values) => {
        const [min, max] = values;
        minInput.value = Math.round(min).toLocaleString('ru');
        maxInput.value = Math.round(max).toLocaleString('ru');
      });

      minInput.addEventListener('input', () => {
        // eslint-disable-next-line radix
        let minVal = parseInt(minInput.value.replace(/\D/g, ''));
        // eslint-disable-next-line radix
        let maxVal = parseInt(maxInput.value.replace(/\D/g, ''));

        if (isNaN(minVal)) {
          minVal = 0;
        }

        if (minVal > maxVal) {
          minVal = maxVal;
        }

        slider.set([minVal, maxVal]);
      });

      maxInput.addEventListener('input', () => {
        // eslint-disable-next-line radix
        let minVal = parseInt(minInput.value.replace(/\D/g, ''));
        // eslint-disable-next-line radix
        let maxVal = parseInt(maxInput.value.replace(/\D/g, ''));

        if (isNaN(maxVal)) {
          maxVal = 1100;
        }

        if (maxVal > 1100) {
          maxVal = 1100;
        }

        if (maxVal < minVal) {
          maxVal = minVal; // Если максимальное значение меньше минимального, делаем их равными
        }

        slider.set([minVal, maxVal]);
      });
    }
  }
};

export {initRangeSliders};
