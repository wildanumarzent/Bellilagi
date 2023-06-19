import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';

const CounterForm = () => {
  return (
    <div className="py-2">
      <div className="flex border w-28 h-8 px-3 justify-between rounded-lg">
        <button>
          <MinusIcon className="h-4 w-4" aria-hidden="true" />
        </button>
        <input
          type="text"
          value={1}
          className="w-full text-center text-gray-700 rounded  leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
        <button>
          <PlusIcon className="h-4 w-4 text-success" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default CounterForm;
