const izyModule = function() {
  const modtask = () => {};
  modtask.whoami = async queryObject => {
    const {
      // @ts-ignore TS2339
      datastreamMonitor
    } = modtask;

    datastreamMonitor.log({ level: 2, msg: {
      action: 'whoami'
    }});

    // @ts-ignore TS2339
    return await modtask.newChainAsync([
      ['outcome', { success : true }]
    ]);
  };
  return modtask;
};
// @ts-ignore TS2339
izyModule.forcemodulereload = true;
// @ts-ignore TS2339
izyModule.entrypoint = '//service/sessionSrv?whoami';
export default izyModule;
