import { useEffect, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Drawer from "../lib/components/core/Drawer";

const meta: Meta<typeof Drawer> = {
  title: "Components/core/Drawer",
  component: Drawer,
  argTypes: {
    side: {
      control: "select",
      options: ["left", "right", "top", "bottom"],
    },
    closeOnOutsideClick: {
      control: "boolean",
    },
    closeOnEscape: {
      control: "boolean"
    },
    open: {
        control: false
    },
    onClose: { control: false },
    children: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Playground: Story = {
  args: {
    side: "bottom",
    closeOnOutsideClick: false,
    closeOnEscape: false,
  },

  render: (args) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(false);
    }, [args]);

    return (
      <div className="h-screen p-4">
        <button
          className="rounded-md bg-blue-600 px-4 py-2 text-white"
          onClick={() => setOpen(true)}
        >
          Abrir Drawer
        </button>

        <Drawer
          {...args}
          open={open}
          onClose={() => setOpen(false)}
        >
          <div className="p-4">
            <h2 className="mb-4 text-lg font-semibold">
              Drawer ({args.side})
            </h2>

            <p className="mb-4 text-gray-600">
              Contenido de ejemplo
            </p>

            <button
              onClick={() => setOpen(false)}
              className="rounded-md bg-gray-200 px-3 py-1"
            >
              Cerrar
            </button>
          </div>
        </Drawer>
      </div>
    );
  },
};
