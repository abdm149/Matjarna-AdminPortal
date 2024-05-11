import _ from "lodash";
import { useState, useRef } from "react";
import fakerData from "../../utils/faker";
import Button from "../../base-components/Button";
import {
  FormInput,
  FormLabel,
  FormSelect,
  FormTextarea,
} from "../../base-components/Form";
import Lucide from "../../base-components/Lucide";
import { Menu, Tab, Dialog } from "../../base-components/Headless";

function Main() {
  const [newOrderModal, setNewOrderModal] = useState(false);
  const [addItemModal, setAddItemModal] = useState(false);
  const createTicketRef = useRef(null);
  const addItemRef = useRef(null);

  return (
    <>
      <div className="flex flex-col items-center mt-8 intro-y sm:flex-row">
        <h2 className="mr-auto text-lg font-medium">Point of Sale</h2>
        <div className="flex w-full mt-4 sm:w-auto sm:mt-0">
          <Button
            as="a"
            href="#"
            variant="primary"
            onClick={(event: React.MouseEvent) => {
              event.preventDefault();
              setNewOrderModal(true);
            }}
            className="mr-2 shadow-md"
          >
            New Order
          </Button>
          <Menu className="ml-auto sm:ml-0">
            <Menu.Button as={Button} className="px-2 !box">
              <span className="flex items-center justify-center w-5 h-5">
                <Lucide icon="ChevronDown" className="w-4 h-4" />
              </span>
            </Menu.Button>
            <Menu.Items>
              <Menu.Item>
                <Lucide icon="Activity" className="w-4 h-4 mr-2" />
                <span className="truncate">
                  INV-0206020 - {fakerData[3].users[0].name}
                </span>
              </Menu.Item>
              <Menu.Item>
                <Lucide icon="Activity" className="w-4 h-4 mr-2" />
                <span className="truncate">
                  INV-0206022 - {fakerData[4].users[0].name}
                </span>
              </Menu.Item>
              <Menu.Item>
                <Lucide icon="Activity" className="w-4 h-4 mr-2" />
                <span className="truncate">
                  INV-0206021 - {fakerData[5].users[0].name}
                </span>
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5 mt-5 intro-y">
        {/* BEGIN: Item List */}
        <div className="col-span-12 intro-y lg:col-span-8">
          <div className="lg:flex intro-y">
            <div className="relative">
              <FormInput
                type="text"
                className="w-full px-4 py-3 pr-10 lg:w-64 !box"
                placeholder="Search item..."
              />
              <Lucide
                icon="Search"
                className="absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3 text-slate-500"
              />
            </div>
            <FormSelect className="w-full px-4 py-3 mt-3 ml-auto !box lg:w-auto lg:mt-0">
              <option>Sort By</option>
              <option>A to Z</option>
              <option>Z to A</option>
              <option>Lowest Price</option>
              <option>Highest Price</option>
            </FormSelect>
          </div>
          <div className="grid grid-cols-12 gap-5 mt-5">
            <div className="col-span-12 p-5 cursor-pointer sm:col-span-4 2xl:col-span-3 box zoom-in">
              <div className="text-base font-medium">Soup</div>
              <div className="text-slate-500">5 Items</div>
            </div>
            <div className="col-span-12 p-5 cursor-pointer sm:col-span-4 2xl:col-span-3 box bg-primary zoom-in">
              <div className="text-base font-medium text-white">
                Pancake & Toast
              </div>
              <div className="text-white text-opacity-80 dark:text-slate-500">
                8 Items
              </div>
            </div>
            <div className="col-span-12 p-5 cursor-pointer sm:col-span-4 2xl:col-span-3 box zoom-in">
              <div className="text-base font-medium">Pasta</div>
              <div className="text-slate-500">4 Items</div>
            </div>
            <div className="col-span-12 p-5 cursor-pointer sm:col-span-4 2xl:col-span-3 box zoom-in">
              <div className="text-base font-medium">Waffle</div>
              <div className="text-slate-500">3 Items</div>
            </div>
            <div className="col-span-12 p-5 cursor-pointer sm:col-span-4 2xl:col-span-3 box zoom-in">
              <div className="text-base font-medium">Snacks</div>
              <div className="text-slate-500">8 Items</div>
            </div>
            <div className="col-span-12 p-5 cursor-pointer sm:col-span-4 2xl:col-span-3 box zoom-in">
              <div className="text-base font-medium">Deserts</div>
              <div className="text-slate-500">8 Items</div>
            </div>
            <div className="col-span-12 p-5 cursor-pointer sm:col-span-4 2xl:col-span-3 box zoom-in">
              <div className="text-base font-medium">Beverage</div>
              <div className="text-slate-500">9 Items</div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-5 pt-5 mt-5 border-t">
            {_.take(fakerData, 8).map((faker, fakerKey) => (
              <a
                key={fakerKey}
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  setAddItemModal(true);
                }}
                className="block col-span-12 intro-y sm:col-span-4 2xl:col-span-3"
              >
                <div className="relative p-3 rounded-md box zoom-in">
                  <div className="flex-none relative block before:block before:w-full before:pt-[100%]">
                    <div className="absolute top-0 left-0 w-full h-full image-fit">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        className="rounded-md"
                        src={faker.foods[0].image}
                      />
                    </div>
                  </div>
                  <div className="block mt-3 font-medium text-center truncate">
                    {faker.foods[0].name}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        {/* END: Item List */}
        {/* BEGIN: Ticket */}
        <Tab.Group className="col-span-12 lg:col-span-4">
          <div className="pr-1 intro-y">
            <div className="p-2 box">
              <Tab.List variant="pills">
                <Tab>
                  <Tab.Button as="button" className="w-full py-2">
                    Ticket
                  </Tab.Button>
                </Tab>
                <Tab>
                  <Tab.Button as="button" className="w-full py-2">
                    Details
                  </Tab.Button>
                </Tab>
              </Tab.List>
            </div>
          </div>
          <Tab.Panels>
            <Tab.Panel>
              <div className="p-2 mt-5 box">
                {_.take(fakerData, 5).map((faker, fakerKey) => (
                  <a
                    href="#"
                    key={fakerKey}
                    onClick={(event: React.MouseEvent) => {
                      event.preventDefault();
                      setAddItemModal(true);
                    }}
                    className="flex items-center p-3 transition duration-300 ease-in-out bg-white rounded-md cursor-pointer dark:bg-darkmode-600 hover:bg-slate-100 dark:hover:bg-darkmode-400"
                  >
                    <div className="max-w-[50%] truncate mr-1">
                      {faker.foods[0].name}
                    </div>
                    <div className="text-slate-500">x 1</div>
                    <Lucide
                      icon="Edit"
                      className="w-4 h-4 ml-2 text-slate-500"
                    />
                    <div className="ml-auto font-medium">
                      ${faker.totals[0]}
                    </div>
                  </a>
                ))}
              </div>
              <div className="flex p-5 mt-5 box">
                <FormInput
                  type="text"
                  className="w-full px-4 py-3 pr-10 bg-slate-100 border-slate-200/60"
                  placeholder="Use coupon code..."
                />
                <Button variant="primary" className="ml-2">
                  Apply
                </Button>
              </div>
              <div className="p-5 mt-5 box">
                <div className="flex">
                  <div className="mr-auto">Subtotal</div>
                  <div className="font-medium">$250</div>
                </div>
                <div className="flex mt-4">
                  <div className="mr-auto">Discount</div>
                  <div className="font-medium text-danger">-$20</div>
                </div>
                <div className="flex mt-4">
                  <div className="mr-auto">Tax</div>
                  <div className="font-medium">15%</div>
                </div>
                <div className="flex pt-4 mt-4 border-t border-slate-200/60 dark:border-darkmode-400">
                  <div className="mr-auto text-base font-medium">
                    Total Charge
                  </div>
                  <div className="text-base font-medium">$220</div>
                </div>
              </div>
              <div className="flex mt-5">
                <Button className="w-32 border-slate-300 dark:border-darkmode-400 text-slate-500">
                  Clear Items
                </Button>
                <Button variant="primary" className="w-32 ml-auto shadow-md">
                  Charge
                </Button>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="p-5 mt-5 box">
                <div className="flex items-center pb-5 border-b border-slate-200 dark:border-darkmode-400">
                  <div>
                    <div className="text-slate-500">Time</div>
                    <div className="mt-1">02/06/20 02:10 PM</div>
                  </div>
                  <Lucide
                    icon="Clock"
                    className="w-4 h-4 ml-auto text-slate-500"
                  />
                </div>
                <div className="flex items-center py-5 border-b border-slate-200 dark:border-darkmode-400">
                  <div>
                    <div className="text-slate-500">Customer</div>
                    <div className="mt-1">{fakerData[0].users[0].name}</div>
                  </div>
                  <Lucide
                    icon="User"
                    className="w-4 h-4 ml-auto text-slate-500"
                  />
                </div>
                <div className="flex items-center py-5 border-b border-slate-200 dark:border-darkmode-400">
                  <div>
                    <div className="text-slate-500">People</div>
                    <div className="mt-1">3</div>
                  </div>
                  <Lucide
                    icon="Users"
                    className="w-4 h-4 ml-auto text-slate-500"
                  />
                </div>
                <div className="flex items-center pt-5">
                  <div>
                    <div className="text-slate-500">Table</div>
                    <div className="mt-1">21</div>
                  </div>
                  <Lucide
                    icon="Mic"
                    className="w-4 h-4 ml-auto text-slate-500"
                  />
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
        {/* END: Ticket */}
      </div>
      {/* BEGIN: New Order Modal */}
      <Dialog
        open={newOrderModal}
        onClose={() => {
          setNewOrderModal(false);
        }}
        initialFocus={createTicketRef}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">New Order</h2>
          </Dialog.Title>
          <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
            <div className="col-span-12">
              <FormLabel htmlFor="pos-form-1">Name</FormLabel>
              <FormInput
                id="pos-form-1"
                type="text"
                className="flex-1"
                placeholder="Customer name"
              />
            </div>
            <div className="col-span-12">
              <FormLabel htmlFor="pos-form-2">Table</FormLabel>
              <FormInput
                id="pos-form-2"
                type="text"
                className="flex-1"
                placeholder="Customer table"
              />
            </div>
            <div className="col-span-12">
              <FormLabel htmlFor="pos-form-3">Number of People</FormLabel>
              <FormInput
                id="pos-form-3"
                type="text"
                className="flex-1"
                placeholder="People"
              />
            </div>
          </Dialog.Description>
          <Dialog.Footer className="text-right">
            <Button
              variant="outline-secondary"
              type="button"
              onClick={() => {
                setNewOrderModal(false);
              }}
              className="w-32 mr-1"
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              type="button"
              className="w-32"
              ref={createTicketRef}
            >
              Create Ticket
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>
      {/* END: New Order Modal */}
      {/* BEGIN: Add Item Modal */}
      <Dialog
        open={addItemModal}
        onClose={() => {
          setAddItemModal(false);
        }}
        initialFocus={addItemRef}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">
              {fakerData[0].foods[0].name}
            </h2>
          </Dialog.Title>
          <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
            <div className="col-span-12">
              <FormLabel htmlFor="pos-form-4" className="form-label">
                Quantity
              </FormLabel>
              <div className="flex flex-1">
                <Button
                  type="button"
                  className="w-12 mr-1 border-slate-200 bg-slate-100 dark:bg-darkmode-700 dark:border-darkmode-500 text-slate-500"
                >
                  -
                </Button>
                <FormInput
                  id="pos-form-4"
                  type="text"
                  className="w-24 text-center"
                  placeholder="Item quantity"
                  value="2"
                  onChange={() => {}}
                />
                <Button
                  type="button"
                  className="w-12 ml-1 border-slate-200 bg-slate-100 dark:bg-darkmode-700 dark:border-darkmode-500 text-slate-500"
                >
                  +
                </Button>
              </div>
            </div>
            <div className="col-span-12">
              <FormLabel htmlFor="pos-form-5">Notes</FormLabel>
              <FormTextarea
                id="pos-form-5"
                placeholder="Item notes"
              ></FormTextarea>
            </div>
          </Dialog.Description>
          <Dialog.Footer className="text-right">
            <Button
              variant="outline-secondary"
              type="button"
              onClick={() => {
                setAddItemModal(false);
              }}
              className="w-24 mr-1"
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              type="button"
              className="w-24"
              ref={addItemRef}
            >
              Add Item
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>
      {/* END: Add Item Modal */}
    </>
  );
}

export default Main;
