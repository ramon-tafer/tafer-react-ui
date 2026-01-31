import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Modal from "../lib/components/core/Modal";

const meta: Meta<typeof Modal> = {
  title: "Components/core/Modal",
  component: Modal,
  argTypes: {
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
  }
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Playground: Story = {
  args: {
    closeOnOutsideClick: false,
    closeOnEscape: false
  },
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div className="h-screen p-4">
        <button
          onClick={() => setOpen(true)}
          className="rounded-md bg-blue-600 px-4 py-2 text-white"
        >
          Abrir Modal
        </button>

        <Modal
          {...args}
          open={open}
          onClose={() => setOpen(false)}
        >
          <h2 className="mb-2 text-lg font-semibold">
            Modal de ejemplo
          </h2>

          <p className="mb-4 text-gray-600">
            Este es un modal controlado.
          </p>

          <div className="flex justify-end gap-2">
            <button
              onClick={() => setOpen(false)}
              className="rounded-md bg-gray-200 px-3 py-1"
            >
              Cancelar
            </button>

            <button
              onClick={() => setOpen(false)}
              className="rounded-md bg-blue-600 px-3 py-1 text-white"
            >
              Aceptar
            </button>
          </div>
        </Modal>
      </div>
    );
  },
};
