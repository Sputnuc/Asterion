//НЕ ПОНИМАЕШЬ. НЕ ТРОШЬ БЛЯТЬ - R.O.T.
//Core units
const graviton = extend(UnitType, "graviton", {});
graviton.constructor = () => extend(UnitEntity, {});

const ester = extend(UnitType, "ester", {});
ester.constructor = () => extend(UnitEntity, {});

//Orion (Hunter) units
const varan = extend(UnitType, "varan", {});
varan.constructor = () => extend(MechUnit, {});

const piranha = extend(UnitType, "piranha", {});
piranha.constructor = () => extend(MechUnit, {});

const vulture = extend(UnitType, "vulture", {});
vulture.constructor = () => extend(MechUnit, {});

const scorpion = extend(UnitType, "scorpion", {});
scorpion.constructor = () => extend(MechUnit, {});

const raptor = extend(UnitType, "raptor", {});
raptor.constructor = () => extend(MechUnit, {});

const glava = extend(UnitType, "glava", {});
glava.constructor = () => extend(MechUnit, {});

// Extinct units
const mist = extend(UnitType, "mist", {});
mist.constructor = () => extend(TankUnit, {});

const twilight = extend(UnitType, "twilight", {});
twilight.constructor = () => extend(TankUnit, {});

const clearance = extend(UnitType, "clearance", {});
clearance.constructor = () => extend(TankUnit, {});

const sunrise = extend(UnitType, "sunrise", {});
sunrise.constructor = () => extend(TankUnit, {});

//Pyro units
const spark = extend(UnitType, "spark-u", {});
spark.constructor = () => extend(LegsUnit, {});

const explosion = extend(UnitType, "explosion", {});
explosion.constructor = () => extend(LegsUnit, {});

const fault = extend(UnitType, "fault", {});
fault.constructor = () => extend(LegsUnit, {});

const explosionV1 = extend(UnitType, "explosion-v1", {});
explosionV1.constructor = () => extend(LegsUnit, {});
