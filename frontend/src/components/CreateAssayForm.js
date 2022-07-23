import { useState } from 'react'

function CreateAssayForm() {
  const [error, setError] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    provider: '',
    sampType: '',
    sampVol: '',
    sampReq: '',
    transport: '',
    specAddress: '',
    country: '',
    telNumber: '',
    email: '',
    website: '',
    acredStatus: '',
    npexAvailable: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch('/api/assays', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const json = await response.json()

    if (!response.ok) {
        setError(json.error)
    }
    if (response.ok) {
      setError(null)
      console.log('New assay added');
    }
  }

  return (
    <section className='form'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Assay Name </label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />

          <label>Sample type</label>
          <input
            type='text'
            name='sampType'
            value={formData.sampType}
            onChange={handleChange}
          />

          <label>Sample volume</label>
          <input
            type='text'
            name='sampVol'
            value={formData.sampVol}
            onChange={handleChange}
          />

          <label>Special requirements</label>
          <input
            type='text'
            name='sampReq'
            value={formData.sampReq}
            onChange={handleChange}
          />

          <label>Transport</label>
          <input
            type='text'
            name='transport'
            value={formData.transport}
            onChange={handleChange}
          />

            <label>Provider </label>
            <input
              type='text'
              name='provider'
              value={formData.provider}
              onChange={handleChange}
            />

            <label>Address</label>
            <textarea
              rows='4'
              cols='3'
              type='text'
              name='specAddress'
              value={formData.specAddress}
              onChange={handleChange}></textarea>

            <label>Country</label>
            <input
              type='text'
              name='country'
              value={formData.country}
              onChange={handleChange}
            />

            <label>Telephone Number</label>
            <input
              type='text'
              name='telNumber'
              value={formData.telNumber}
              onChange={handleChange}
            />

            <label>Email </label>
            <input
              type='text'
              name='email'
              value={formData.email}
              onChange={handleChange}
            />

            <label>Website</label>
            <input
              type='text'
              name='website'
              value={formData.website}
              onChange={handleChange}
            />

            <label>UKAS Accredited?</label>
            <input
              type='text'
              name='acredStatus'
              value={formData.acredStatus}
              onChange={handleChange}
            />

            <label>NPEX available? (yes/no)</label>
            <input
              type='text'
              name='npexAvailable'
              value={formData.npexAvailable}
              onChange={handleChange}
            />
          </div>

        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Create Assay
          </button>
          {error && <div className='errmsg'>{error}</div>}
        </div>
      </form>
    </section>
  )
}

export default CreateAssayForm
