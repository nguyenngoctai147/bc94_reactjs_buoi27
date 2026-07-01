export default function ProductItem(props) {
  const { itemData, handleQuickViewItem } = props;
  return (
    <div className="rounded-lg bg-white hover:shadow-gray-300 p-6 shadow-xl hover:shadow-lg shadow-gray-100 dark:border-gray-700 dark:bg-gray-800 transition duration-700 ease-in-out">
      <div className="w-full aspect-square">
        <a
          onClick={() => handleQuickViewItem(itemData)}
          data-modal-target="quickView-modal"
          data-modal-toggle="quickView-modal"
          className="overflow-hidden"
        >
          <img
            className="mx-auto h-full object-cover dark:hidden transition duration-700 ease-in-out hover:scale-105"
            src={itemData.image}
            alt={itemData.shortDescription}
          />
          <img
            className="mx-auto hidden h-full object-cover dark:block transition duration-700 ease-in-out hover:scale-105"
            src={itemData.image}
            alt={itemData.shortDescription}
          />
        </a>
      </div>
      <div className="pt-6">
        <div className="mb-4 flex items-center justify-center gap-4">
          <div className="flex items-center justify-end gap-1">
            <button
              onClick={() => handleQuickViewItem(itemData)}
              data-modal-target="quickView-modal"
              data-modal-toggle="quickView-modal"
              type="button"
              data-tooltip-target="tooltip-quick-look"
              className="rounded-lg p-2 bg-gray-100 text-gray-500 hover:bg-blue-700 hover:text-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only"> Quick View </span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeWidth={2}
                  d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                />
                <path
                  stroke="currentColor"
                  strokeWidth={2}
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </button>
            <div
              id="tooltip-quick-look"
              role="tooltip"
              className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
              data-popper-placement="top"
            >
              Quick View
              <div className="tooltip-arrow" data-popper-arrow />
            </div>
            <button
              type="button"
              data-tooltip-target="tooltip-add-to-favorites"
              className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only"> Add to Favorites </span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                />
              </svg>
            </button>
            <div
              id="tooltip-add-to-favorites"
              role="tooltip"
              className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
              data-popper-placement="top"
            >
              Add to favorites
              <div className="tooltip-arrow" data-popper-arrow />
            </div>
          </div>
        </div>
        <a
          onClick={() => handleQuickViewItem(itemData)}
          data-modal-target="quickView-modal"
          data-modal-toggle="quickView-modal"
          className="text-lg cursor-pointer font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
        >
          {itemData.name}
        </a>
        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
            ${itemData.price}
          </p>
          <button
            type="button"
            className="inline-flex items-center rounded-lg px-5 py-2.5 text-fg-brand bg-neutral-primary border border-brand hover:bg-brand hover:text-white focus:ring-4 focus:ring-brand-subtle font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
          >
            <svg
              className="-ms-2 me-2 h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
