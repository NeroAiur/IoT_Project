const payload = msg.payload
const lightLv = payload.ANALOG.Illuminance

node.warn(lightLv)

const LightSwitch = lightLv > 20 ? {payload: 'ON', topic: 'POWER'} : {payload: 'OFF', topic: 'POWER'}
return LightSwitc