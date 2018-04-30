import Test from './test.js'

let testInstance;

function getTestInstance (render = undefined) {
  testInstance = testInstance || Test.newInstance({
    render: render
  });

  return testInstance;
}

function loading (options) {
  const render = ('render' in options) ? options.render : undefined;
  let instance  = getTestInstance(render);
  instance.show(options);
}

Test.show = function (props = {}) {
  return loading(props);
};

export default Test
