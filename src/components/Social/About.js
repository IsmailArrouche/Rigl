import { LockClosedIcon, EyeIcon, LocationMarkerIcon, UserGroupIcon } from "@heroicons/react/outline";


const AboutSection = () => {
  return (
    <div className="bg-white dark:bg-[#293145] dark:text-[#FFFFFF] rounded-lg p-5 shadow-md w-auto h-[400px] mb-5">
      {/* About Section */}
      <div className="mb-5">
        <h2 className="text-lg font-semibold">About</h2>
        <p className="mt-2 text-sm text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla
          dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus
          mollis pharetra. Proin blandit ac massa sed rhoncus.
        </p>
      </div>

      {/* Details Section */}
      <div className="divide-y divide-gray-300 dark:divide-[#555]">
        <div className="flex items-center py-3">
          <LockClosedIcon className="h-5 w-5 text-gray-400 mr-3" />
          <div>
            <p className="text-sm font-medium">Private</p>
            <p className="text-xs text-gray-400">What's up, how are you?</p>
          </div>
        </div>
        <div className="flex items-center py-3">
          <EyeIcon className="h-5 w-5 text-gray-400 mr-3" />
          <div>
            <p className="text-sm font-medium">Visible</p>
            <p className="text-xs text-gray-400">Anyone can find you</p>
          </div>
        </div>
        <div className="flex items-center py-3">
          <LocationMarkerIcon className="h-5 w-5 text-gray-400 mr-3" />
          <div>
            <p className="text-sm font-medium">Flodia, Austia</p>
          </div>
        </div>
        <div className="flex items-center py-3">
          <UserGroupIcon className="h-5 w-5 text-gray-400 mr-3" />
          <div>
            <p className="text-sm font-medium">General Group</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
