import React, { useState } from 'react';
import './App.css';


function App() {
  const [formData, setFormData] = useState({
    gcnNo: '12273',
    date: '12/05/2025',
    from: 'VARANASI',
    to: 'RAJPURA',
    sealNo: '',
    vehicleNo: 'UP65PT5808',
    vehicleType: 'PICKUP',
    serviceMode: 'PTL',
    actualWt: '123.12',
    chargableWt: '123.12',
    
    consignor: 'JSW PAINTS LIMITED VARANASI',
    consignorAddress: 'ARAZI NO 171, MAUZA, KARNADADI,\nPARGANA-KASWAR SARKARI\nRAJATALAB VARANASI 221311',
    
    consignee: 'M/S ASHOK KUMAR GUPTA',
    consigneeAddress: 'RAIPURA TIRAHA RAJAPUR 210207\nBANDA',
    phone: '6387284194',
    
    materials: [
      { description: 'Colour Paint (as per attached Invoice)', packages: '4', remark: '' }
    ],
    
    invoiceNo: '25UP0910005764',
    declaredValue: '6905.00',
    
    receivedBy: '',
    receivedTime: '',
    receivedRemarks: ''
  });

  // Initial state to use for reset
  const initialFormData = {
    gcnNo: '',
    date: '',
    // from: '',
    to: '',
    sealNo: '',
    vehicleNo: '',
    vehicleType: '',
    serviceMode: '',
    actualWt: '',
    chargableWt: '',
    
    // consignor: '',
    // consignorAddress: '',
    
    consignee: '',
    consigneeAddress: '',
    phone: '',
    
    materials: [
      { description: '', packages: '', remark: '' }
    ],
    
    invoiceNo: '',
    declaredValue: '',
    
    receivedBy: '',
    receivedTime: '',
    receivedRemarks: ''
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMaterialChange = (index, field, value) => {
    const updatedMaterials = [...formData.materials];
    updatedMaterials[index][field] = value;
    setFormData(prev => ({
      ...prev,
      materials: updatedMaterials
    }));
  };

  const addMaterialRow = () => {
    if (formData.materials.length < 2) { // Limit to 2 rows to fit on A4 side by side
      setFormData(prev => ({
        ...prev,
        materials: [...prev.materials, { description: '', packages: '', remark: '' }]
      }));
    } else {
      alert('Maximum 2 rows allowed to fit on A4 page side by side');
    }
  };

  const removeMaterialRow = (index) => {
    if (formData.materials.length > 1) {
      const updatedMaterials = formData.materials.filter((_, i) => i !== index);
      setFormData(prev => ({
        ...prev,
        materials: updatedMaterials
      }));
    }
  };

  const printForm = () => {
    window.print();
  };

  // Reset form function
  const resetForm = () => {
    setFormData(initialFormData);
  };

  // Function to render a single form
  const renderForm = (copyType) => {
    return (
      <div className="form-container">
        {/* Header */}
        <div className="header-right">
          <div className="header-title">{copyType} Copy</div>
        </div>
        
        <div className="company-header">
          <div className="company-name">MAHENDRA ROAD LINE</div>
          <div className="company-tagline">YOUR GOODS ARE IN GOOD HAND</div>
        </div>
        
        <div className="company-details">
          <div className="company-branch">MAHENDRA ROAD LINE(UP)</div>
          <div className="company-address">
            Lahartara, GT Road Varanasi, Uttar Pradesh-221002<br />
            Contact No -9838674375<br />
            PAN:BTFPS7011G Email:info@mahendraroadline.in Url:www.mahendraroadline.in
          </div>
        </div>
        
        {/* Main Form */}
        <div className="form-grid">
          <div className="left-column">
            <div className="form-group">
              <label className="form-label">Vehicle No:</label>
              <input 
                type="text" 
                name="vehicleNo" 
                value={formData.vehicleNo} 
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Vehicle Type:</label>
              <input 
                type="text" 
                name="vehicleType" 
                value={formData.vehicleType} 
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Consignor:</label>
              <input 
                type="text" 
                name="consignor" 
                value={formData.consignor} 
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Address:</label>
              <textarea 
                name="consignorAddress" 
                value={formData.consignorAddress} 
                onChange={handleChange}
                className="form-textarea" 
                rows="2"
              />
            </div>
          </div>
          
          <div className="right-column">
            <div className="note-header">GOODS CONSIGNMENT NOTE</div>
            <div className="note-subheader">AT OWNER'S RISK</div>
            <div className="form-group">
              <label className="form-label">G.C.N. No.</label>
              <input 
                type="text" 
                name="gcnNo" 
                value={formData.gcnNo} 
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Date.</label>
              <input 
                type="text" 
                name="date" 
                value={formData.date} 
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="location-grid">
              <div>
                <label className="form-label">From</label>
                <input 
                  type="text" 
                  name="from" 
                  value={formData.from} 
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div>
                <label className="form-label">To</label>
                <input 
                  type="text" 
                  name="to" 
                  value={formData.to} 
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Seal No.</label>
              <input 
                type="text" 
                name="sealNo" 
                value={formData.sealNo} 
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div>
        </div>
        
        <div className="form-grid">
          <div className="left-column">
            <div className="form-group">
              <label className="form-label">Consignee:</label>
              <input 
                type="text" 
                name="consignee" 
                value={formData.consignee} 
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Address:</label>
              <textarea 
                name="consigneeAddress" 
                value={formData.consigneeAddress} 
                onChange={handleChange}
                className="form-textarea" 
                rows="2"
              />
            </div>
          </div>
          
          <div className="right-column-small">
            <div className="form-group">
              <label className="form-label">Actual Wt:</label>
              <div className="weight-input">
                <input 
                  type="text" 
                  name="actualWt" 
                  value={formData.actualWt} 
                  onChange={handleChange}
                  className="form-input"
                />
                <span className="weight-unit">Kgs</span>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Phone:</label>
              <input 
                type="text" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Chargable Wt:</label>
              <input 
                type="text" 
                name="chargableWt" 
                value={formData.chargableWt} 
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div>
        </div>
        
        <div className="materials-section">
          <div className="materials-header">Received the goods for transportation subject to T&Cs:</div>
          <table className="materials-table">
            <thead>
              <tr>
                <th>Material Description</th>
                <th>No of Pkg</th>
                <th>Remark</th>
                <th className="action-column"></th>
              </tr>
            </thead>
            <tbody>
              {formData.materials.map((material, index) => (
                <tr key={index}>
                  <td>
                    <input 
                      type="text" 
                      value={material.description} 
                      onChange={(e) => handleMaterialChange(index, 'description', e.target.value)}
                      className="table-input"
                    />
                  </td>
                  <td>
                    <input 
                      type="text" 
                      value={material.packages} 
                      onChange={(e) => handleMaterialChange(index, 'packages', e.target.value)}
                      className="table-input"
                    />
                  </td>
                  <td>
                    <input 
                      type="text" 
                      value={material.remark} 
                      onChange={(e) => handleMaterialChange(index, 'remark', e.target.value)}
                      className="table-input"
                    />
                  </td>
                  <td className="action-column">
                    <button 
                      onClick={() => removeMaterialRow(index)}
                      className="remove-button"
                      title="Remove row"
                    >
                      ×
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button 
            onClick={addMaterialRow}
            className="add-button"
          >
            Add Row
          </button>
        </div>
        
        <div className="footer-grid">
          <div className="invoice-section">
            <div className="form-group">
              <label className="form-label">Invoice No.</label>
              <input 
                type="text" 
                name="invoiceNo" 
                value={formData.invoiceNo} 
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Declared Value ₹</label>
              <input 
                type="text" 
                name="declaredValue" 
                value={formData.declaredValue} 
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="terms-text">
              I/We do hereby certify that the above particulars of goods consigned by me/us
              have been correctly entered into and the consignement is booked with full knowedge of the
              T&Cs whitch I/We accept.
            </div>
            <div className="jurisdiction-text">
              All Disputes are subject to Varanusi Jurisdiction only.
            </div>
          </div>
          
          <div className="delivery-section">
            <div className="delivery-header">Proof of Delivery</div>
            <div className="form-group">
              <label className="form-label">Date:</label>
              <input type="text" className="form-input" />
            </div>
            <div className="form-group">
              <label className="form-label">Received By(Name Sign):</label>
              <input 
                type="text" 
                name="receivedBy" 
                value={formData.receivedBy} 
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Time:</label>
              <input 
                type="text" 
                name="receivedTime" 
                value={formData.receivedTime} 
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Remarks:</label>
              <input 
                type="text" 
                name="receivedRemarks" 
                value={formData.receivedRemarks} 
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div>
        </div>
        
        <div className="signature-section">
          <div></div>
          <div className="signature-box">
            <div className="signature-line">Signature of Booking Incharge for MAHENDRA ROAD LINE(UP)</div>
            <div className="website-url">https://mahendraroadline.indiahostbiz.com/GCNotePrint.aspx</div>
          </div>
        </div>
        
        <div className="service-mode">
          <div>Service Mode: 
            <input 
              type="text" 
              name="serviceMode" 
              value={formData.serviceMode} 
              onChange={handleChange}
              className="service-input"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="consignment-form">
      <div className="print-section">
        <button 
          onClick={printForm}
          className="print-button"
        >
          Print Form
        </button>
        <button 
          onClick={resetForm}
          className="reset-button"
          style={{
            marginLeft: '10px',
            padding: '8px 16px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Reset Form
        </button>
      </div>
      
      <div className="a4-container">
        <div className="side-by-side-container">
          <div className="copy customer-copy">
            {renderForm("Customer")}
          </div>
          <div className="copy consignor-copy">
            {renderForm("Consignor")}
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;