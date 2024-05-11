import _ from "lodash";
import fakerData from "../../utils/faker";
import Button from "../../base-components/Button";
import Lucide from "../../base-components/Lucide";
import Tippy from "../../base-components/Tippy";
import { Menu } from "../../base-components/Headless";
import Table from "../../base-components/Table";

function Main() {
  return (
    <>
      <div className="flex flex-col items-center mt-8 intro-y sm:flex-row">
        <h2 className="mr-auto text-lg font-medium">Transaction Details</h2>
        <div className="flex w-full mt-4 sm:w-auto sm:mt-0">
          <Button variant="primary" className="mr-2 shadow-md">
            Print
          </Button>
          <Menu className="ml-auto sm:ml-0">
            <Menu.Button as={Button} className="px-2 !box">
              <span className="flex items-center justify-center w-5 h-5">
                <Lucide icon="Plus" className="w-4 h-4" />
              </span>
            </Menu.Button>
            <Menu.Items className="w-40">
              <Menu.Item>
                <Lucide icon="File" className="w-4 h-4 mr-2" /> Export Word
              </Menu.Item>
              <Menu.Item>
                <Lucide icon="File" className="w-4 h-4 mr-2" /> Export to PDF
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>
      {/* BEGIN: Transaction Details */}
      <div className="grid grid-cols-11 gap-5 mt-5 intro-y">
        <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
          <div className="p-5 rounded-md box">
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <div className="text-base font-medium truncate">
                Transaction Details
              </div>
              <a href="" className="flex items-center ml-auto text-primary">
                <Lucide icon="Edit" className="w-4 h-4 mr-2" /> Change Status
              </a>
            </div>
            <div className="flex items-center">
              <Lucide
                icon="Clipboard"
                className="w-4 h-4 mr-2 text-slate-500"
              />
              Invoice:
              <a href="" className="ml-1 underline decoration-dotted">
                INV/20220217/MPL/2053411933
              </a>
            </div>
            <div className="flex items-center mt-3">
              <Lucide icon="Calendar" className="w-4 h-4 mr-2 text-slate-500" />
              Purchase Date: 24 March 2022
            </div>
            <div className="flex items-center mt-3">
              <Lucide icon="Clock" className="w-4 h-4 mr-2 text-slate-500" />
              Transaction Status:
              <span className="px-2 ml-1 rounded bg-success/20 text-success">
                Completed
              </span>
            </div>
          </div>
          <div className="p-5 mt-5 rounded-md box">
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <div className="text-base font-medium truncate">
                Buyer Details
              </div>
              <a href="" className="flex items-center ml-auto text-primary">
                <Lucide icon="Edit" className="w-4 h-4 mr-2" /> View Details
              </a>
            </div>
            <div className="flex items-center">
              <Lucide
                icon="Clipboard"
                className="w-4 h-4 mr-2 text-slate-500"
              />
              Name:
              <a href="" className="ml-1 underline decoration-dotted">
                {fakerData[0].users[0].name}
              </a>
            </div>
            <div className="flex items-center mt-3">
              <Lucide icon="Calendar" className="w-4 h-4 mr-2 text-slate-500" />
              Phone Number: +71828273732
            </div>
            <div className="flex items-center mt-3">
              <Lucide icon="MapPin" className="w-4 h-4 mr-2 text-slate-500" />
              Address: 260 W. Storm Street New York, NY 10025.
            </div>
          </div>
          <div className="p-5 mt-5 rounded-md box">
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <div className="text-base font-medium truncate">
                Payment Details
              </div>
            </div>
            <div className="flex items-center">
              <Lucide
                icon="Clipboard"
                className="w-4 h-4 mr-2 text-slate-500"
              />
              Payment Method:
              <div className="ml-auto">Direct bank transfer</div>
            </div>
            <div className="flex items-center mt-3">
              <Lucide
                icon="CreditCard"
                className="w-4 h-4 mr-2 text-slate-500"
              />
              Total Price (2 items):
              <div className="ml-auto">$12,500.00</div>
            </div>
            <div className="flex items-center mt-3">
              <Lucide
                icon="CreditCard"
                className="w-4 h-4 mr-2 text-slate-500"
              />
              Total Shipping Cost (800 gr):
              <div className="ml-auto">$1,500.00</div>
            </div>
            <div className="flex items-center mt-3">
              <Lucide
                icon="CreditCard"
                className="w-4 h-4 mr-2 text-slate-500"
              />
              Shipping Insurance:
              <div className="ml-auto">$600.00</div>
            </div>
            <div className="flex items-center pt-5 mt-5 font-medium border-t border-slate-200/60 dark:border-darkmode-400">
              <Lucide
                icon="CreditCard"
                className="w-4 h-4 mr-2 text-slate-500"
              />
              Grand Total:
              <div className="ml-auto">$15,000.00</div>
            </div>
          </div>
          <div className="p-5 mt-5 rounded-md box">
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <div className="text-base font-medium truncate">
                Shipping Information
              </div>
              <a href="" className="flex items-center ml-auto text-primary">
                <Lucide icon="MapPin" className="w-4 h-4 mr-2" /> Tracking Info
              </a>
            </div>
            <div className="flex items-center">
              <Lucide
                icon="Clipboard"
                className="w-4 h-4 mr-2 text-slate-500"
              />
              Courier: Left4code Express
            </div>
            <div className="flex items-center mt-3">
              <Lucide icon="Calendar" className="w-4 h-4 mr-2 text-slate-500" />
              Tracking Number: 003005580322
              <Lucide icon="Copy" className="w-4 h-4 ml-2 text-slate-500" />
            </div>
            <div className="flex items-center mt-3">
              <Lucide icon="MapPin" className="w-4 h-4 mr-2 text-slate-500" />
              Address: 260 W. Storm Street New York, NY 10025.
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7 2xl:col-span-8">
          <div className="p-5 rounded-md box">
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <div className="text-base font-medium truncate">
                Order Details
              </div>
              <a href="" className="flex items-center ml-auto text-primary">
                <Lucide icon="Plus" className="w-4 h-4 mr-2" /> Add Notes
              </a>
            </div>
            <div className="-mt-3 overflow-auto lg:overflow-visible">
              <Table striped>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th className="whitespace-nowrap !py-5">
                      Product
                    </Table.Th>
                    <Table.Th className="text-right whitespace-nowrap">
                      Unit Price
                    </Table.Th>
                    <Table.Th className="text-right whitespace-nowrap">
                      Qty
                    </Table.Th>
                    <Table.Th className="text-right whitespace-nowrap">
                      Total
                    </Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {_.take(fakerData, 8).map((faker, fakerKey) => (
                    <Table.Tr key={fakerKey}>
                      <Table.Td className="!py-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 image-fit zoom-in">
                            <Tippy
                              as="img"
                              alt="Midone - HTML Admin Template"
                              className="border-2 border-white rounded-lg shadow-md"
                              src={faker.images[0]}
                              content={`Uploaded at ${faker.dates[0]}`}
                            />
                          </div>
                          <a
                            href=""
                            className="ml-4 font-medium whitespace-nowrap"
                          >
                            {faker.products[0].name}
                          </a>
                        </div>
                      </Table.Td>
                      <Table.Td className="text-right">
                        ${faker.totals[0] + ",000.00"}
                      </Table.Td>
                      <Table.Td className="text-right">2</Table.Td>
                      <Table.Td className="text-right">
                        ${faker.totals[0] * 2 + ",000.00"}
                      </Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
      {/* END: Transaction Details */}
    </>
  );
}

export default Main;
