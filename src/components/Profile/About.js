import { LockClosedIcon, EyeIcon, LocationMarkerIcon, UserGroupIcon } from "@heroicons/react/outline";

const AboutSection = () => {
  return (
    <div className="w-full bg-white dark:bg-[#293145] dark:text-[#FFFFFF] rounded-lg p-4 sm:p-5 shadow-md">
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
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {[
          {
            Icon: LockClosedIcon,
            title: "Private",
            subtitle: "What's up, how are you?",
          },
          {
            Icon: EyeIcon,
            title: "Visible",
            subtitle: "Anyone can find you",
          },
          {
            Icon: LocationMarkerIcon,
            title: "Flodia, Austria",
          },
          {
            Icon: UserGroupIcon,
            title: "General Group",
          },
        ].map(({ Icon, title, subtitle }, index) => (
          <div key={index} className="flex items-center py-3">
            <Icon className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium">{title}</p>
              {subtitle && (
                <p className="text-xs text-gray-400">{subtitle}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
