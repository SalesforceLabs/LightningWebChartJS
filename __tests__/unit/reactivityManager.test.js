import ReactivityManager from 'c/reactivityManager';

describe('Reactivity Manager: ', () => {
  const throttledFn = jest.fn();
  const rm = new ReactivityManager();
  rm.registerJob(throttledFn);
  let reactivityProxy;

  test('get reactivity Proxy', () => {
    reactivityProxy = rm.getReactivityProxy();
    expect(reactivityProxy).toEqual({});
    expect(throttledFn).not.toBeCalled();
  });

  test('proxy trigger throttling of the registered job', async () => {
    reactivityProxy.test = 'test';
    expect(throttledFn).not.toBeCalled();
    await flushPromises().then(() => {
      expect(throttledFn).toBeCalled();
    });
  });
  test('manual call trigger throttling', async () => {
    rm.throttleRegisteredJob();
    expect(throttledFn).not.toBeCalled();
    await flushPromises().then(() => {
      expect(throttledFn).toBeCalled();
    });
  });
});
