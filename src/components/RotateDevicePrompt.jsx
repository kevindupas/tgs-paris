import useTabletOrientation from "../hooks/useTabletOrientation";

const RotateDevicePrompt = () => {
  const shouldRotate = useTabletOrientation();

  if (!shouldRotate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white p-4 text-center">
      <div>
        <h2 className="mb-4 text-2xl font-bold">
          Veuillez pivoter votre appareil
        </h2>
        <p className="text-lg">
          Pour une meilleure expérience, veuillez utiliser votre tablette en
          mode paysage.
        </p>
      </div>
    </div>
  );
};

export default RotateDevicePrompt;
