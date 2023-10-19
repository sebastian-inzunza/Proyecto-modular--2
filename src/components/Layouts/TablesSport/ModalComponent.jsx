import React from "react";
import { Modal, Button, InputNumber, Form } from "antd";
import calavera from "../../../asset/calavera.webp";
import calavera2 from "../../../asset/calavera2.webp";



function ModalComponent({
  visible,
  onCancel,
  equipoSeleccionado,
  equipoEnemigo,
  momio,
  eventos,
  nombreEvento,
})
 {
  const [form] = Form.useForm();

  const handleCancel = () => {
    form.resetFields(); // Esto restablecerá los campos del formulario
    onCancel();
  }

  return (

    
    <Modal
      title={<div className="text-center text-2xl">{nombreEvento}</div>}
      visible={visible}
      onCancel={handleCancel}
      footer={false}
    >
      <div class="w-py bg-gray-500 h-1"></div>
      <div className="mt-6 flex justify-between bg-green-300 rounded-xl px-2">
        <span className="text-2xl">{equipoSeleccionado}</span>
        <span className="text-2xl text-end text-stone-400 font-semibold">
          {momio}
        </span>
      </div>
      <div className="flex justify-center mt-3 font-bold ">
        <span className="mr-2 text-lg">{equipoSeleccionado}</span>
        
        <span className="mr-2 text-xl">{equipoSeleccionado === "Empate" ? "" : "vs"}</span>
        <span className="text-lg">{equipoEnemigo}</span>
      </div>
      <div className="flex justify-center">
        {equipoSeleccionado === "Empate" ? (
                <img className="w-1/3" src={calavera2} alt="" />

        ): (
          <img className="w-1/3" src={calavera} alt="" />

        )}

      </div>
      <div className="mt-3">
        <Form name="miFormulario" form={form}>
          <Form.Item
            label="Ingresa el monto a apostar"
            name="monto"
            labelCol={{ span: 24 }} // Configura labelCol para que la etiqueta esté arriba
            rules={[
              { required: true, message: "Por favor, ingresa una cantidad" },
            ]}
          >
            <InputNumber className="w-full" />
          </Form.Item>

          <Form.Item
            label=""
            labelCol={{ span: 0 }} // Configura labelCol para que la etiqueta del botón desaparezca
            colon={false}
            className="flex justify-end"
          >
            <button
              htmlType="submit"
              className="bg-amber-300 px-3 py-2 hover:bg-amber-600 hover:text-white rounded-md text-lg transition duration-300 ease-in-out hover:opacity-75"
            >
              Apostar
            </button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
}

export default ModalComponent;
