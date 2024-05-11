import _ from "lodash";
import clsx from "clsx";
import { useState, useRef } from "react";
import fakerData from "../../utils/faker";
import Button from "../../base-components/Button";
import Pagination from "../../base-components/Pagination";
import { FormCheck, FormInput, FormSelect } from "../../base-components/Form";
import Lucide from "../../base-components/Lucide";
import { Dialog, Menu } from "../../base-components/Headless";
import Table from "../../base-components/Table";

function Main() {
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);
  const deleteButtonRef = useRef(null);

  return (
    <>
      <h2 className="mt-10 text-lg font-medium intro-y">Transaction List</h2>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="flex flex-wrap items-center col-span-12 mt-2 intro-y xl:flex-nowrap">
          <div className="flex w-full sm:w-auto">
            <div className="relative w-48 text-slate-500">
              <FormInput
                type="text"
                className="w-48 pr-10 !box"
                placeholder="Search by invoice..."
              />
              <Lucide
                icon="Search"
                className="absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3"
              />
            </div>
            <FormSelect className="ml-2 !box">
              <option>Status</option>
              <option>Waiting Payment</option>
              <option>Confirmed</option>
              <option>Packing</option>
              <option>Delivered</option>
              <option>Completed</option>
            </FormSelect>
          </div>
          <div className="hidden mx-auto xl:block text-slate-500">
            Showing 1 to 10 of 150 entries
          </div>
          <div className="flex items-center w-full mt-3 xl:w-auto xl:mt-0">
            <Button variant="primary" className="mr-2 shadow-md">
              <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Export to
              Excel
            </Button>
            <Button variant="primary" className="mr-2 shadow-md">
              <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Export to PDF
            </Button>
            <Menu>
              <Menu.Button as={Button} className="px-2 !box">
                <span className="flex items-center justify-center w-5 h-5">
                  <Lucide icon="Plus" className="w-4 h-4" />
                </span>
              </Menu.Button>
              <Menu.Items className="w-40">
                <Menu.Item>
                  <Lucide icon="Printer" className="w-4 h-4 mr-2" /> Print
                </Menu.Item>
                <Menu.Item>
                  <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Export to
                  Excel
                </Menu.Item>
                <Menu.Item>
                  <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Export to
                  PDF
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </div>
        {/* BEGIN: Data List */}
        <div className="col-span-12 overflow-auto intro-y 2xl:overflow-visible">
          <Table className="border-spacing-y-[10px] border-separate -mt-2">
            <Table.Thead>
              <Table.Tr>
                <Table.Th className="border-b-0 whitespace-nowrap">
                  <FormCheck.Input type="checkbox" />
                </Table.Th>
                <Table.Th className="border-b-0 whitespace-nowrap">
                  INVOICE
                </Table.Th>
                <Table.Th className="border-b-0 whitespace-nowrap">
                  BUYER NAME
                </Table.Th>
                <Table.Th className="text-center border-b-0 whitespace-nowrap">
                  STATUS
                </Table.Th>
                <Table.Th className="border-b-0 whitespace-nowrap">
                  PAYMENT
                </Table.Th>
                <Table.Th className="text-right border-b-0 whitespace-nowrap">
                  <div className="pr-16">TOTAL TRANSACTION</div>
                </Table.Th>
                <Table.Th className="text-center border-b-0 whitespace-nowrap">
                  ACTIONS
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {_.take(fakerData, 9).map((faker, fakerKey) => (
                <Table.Tr key={fakerKey} className="intro-x">
                  <Table.Td className="first:rounded-l-md last:rounded-r-md w-10 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                    <FormCheck.Input type="checkbox" />
                  </Table.Td>
                  <Table.Td className="first:rounded-l-md last:rounded-r-md w-40 !py-4 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                    <a
                      href=""
                      className="underline decoration-dotted whitespace-nowrap"
                    >
                      {"#INV-" + faker.totals[0] + "807556"}
                    </a>
                  </Table.Td>
                  <Table.Td className="first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                    <a href="" className="font-medium whitespace-nowrap">
                      {faker.users[0].name}
                    </a>
                    {faker.trueFalse[0] ? (
                      <div
                        v-if="faker.trueFalse[0]"
                        className="text-slate-500 text-xs whitespace-nowrap mt-0.5"
                      >
                        Ohio, Ohio
                      </div>
                    ) : (
                      <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                        California, LA
                      </div>
                    )}
                  </Table.Td>
                  <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                    <div
                      className={clsx({
                        "flex items-center justify-center whitespace-nowrap":
                          true,
                        "text-success": faker.trueFalse[0],
                        "text-danger": !faker.trueFalse[0],
                      })}
                    >
                      <Lucide icon="CheckSquare" className="w-4 h-4 mr-2" />
                      {faker.trueFalse[0] ? "Active" : "Inactive"}
                    </div>
                  </Table.Td>
                  <Table.Td className="first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                    {faker.trueFalse[0] ? (
                      <>
                        <div className="whitespace-nowrap">
                          Direct bank transfer
                        </div>
                        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          25 March, 12:55
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="whitespace-nowrap">
                          Checking payments
                        </div>
                        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          30 March, 11:00
                        </div>
                      </>
                    )}
                  </Table.Td>
                  <Table.Td className="first:rounded-l-md last:rounded-r-md w-40 text-right bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                    <div className="pr-16">${faker.totals[0] + ",000,00"}</div>
                  </Table.Td>
                  <Table.Td className="first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400">
                    <div className="flex items-center justify-center">
                      <a
                        className="flex items-center mr-5 text-primary whitespace-nowrap"
                        href="#"
                      >
                        <Lucide icon="CheckSquare" className="w-4 h-4 mr-1" />{" "}
                        View Details
                      </a>
                      <a
                        className="flex items-center text-primary whitespace-nowrap"
                        href="#"
                        onClick={(event: React.MouseEvent) => {
                          event.preventDefault();
                          setDeleteConfirmationModal(true);
                        }}
                      >
                        <Lucide
                          icon="ArrowLeftRight"
                          className="w-4 h-4 mr-1"
                        />
                        Change Status
                      </a>
                    </div>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </div>
        {/* END: Data List */}
        {/* BEGIN: Pagination */}
        <div className="flex flex-wrap items-center col-span-12 intro-y sm:flex-row sm:flex-nowrap">
          <Pagination className="w-full sm:w-auto sm:mr-auto">
            <Pagination.Link>
              <Lucide icon="ChevronsLeft" className="w-4 h-4" />
            </Pagination.Link>
            <Pagination.Link>
              <Lucide icon="ChevronLeft" className="w-4 h-4" />
            </Pagination.Link>
            <Pagination.Link>...</Pagination.Link>
            <Pagination.Link>1</Pagination.Link>
            <Pagination.Link active>2</Pagination.Link>
            <Pagination.Link>3</Pagination.Link>
            <Pagination.Link>...</Pagination.Link>
            <Pagination.Link>
              <Lucide icon="ChevronRight" className="w-4 h-4" />
            </Pagination.Link>
            <Pagination.Link>
              <Lucide icon="ChevronsRight" className="w-4 h-4" />
            </Pagination.Link>
          </Pagination>
          <FormSelect className="w-20 mt-3 !box sm:mt-0">
            <option>10</option>
            <option>25</option>
            <option>35</option>
            <option>50</option>
          </FormSelect>
        </div>
        {/* END: Pagination */}
      </div>
      {/* BEGIN: Delete Confirmation Modal */}
      <Dialog
        open={deleteConfirmationModal}
        onClose={() => {
          setDeleteConfirmationModal(false);
        }}
        initialFocus={deleteButtonRef}
      >
        <Dialog.Panel>
          <div className="p-5 text-center">
            <Lucide
              icon="XCircle"
              className="w-16 h-16 mx-auto mt-3 text-danger"
            />
            <div className="mt-5 text-3xl">Are you sure?</div>
            <div className="mt-2 text-slate-500">
              Do you really want to delete these records? <br />
              This process cannot be undone.
            </div>
          </div>
          <div className="px-5 pb-8 text-center">
            <Button
              variant="outline-secondary"
              type="button"
              onClick={() => {
                setDeleteConfirmationModal(false);
              }}
              className="w-24 mr-1"
            >
              Cancel
            </Button>
            <Button
              variant="danger"
              type="button"
              className="w-24"
              ref={deleteButtonRef}
            >
              Delete
            </Button>
          </div>
        </Dialog.Panel>
      </Dialog>
      {/* END: Delete Confirmation Modal */}
    </>
  );
}

export default Main;
