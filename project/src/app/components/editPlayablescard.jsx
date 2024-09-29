export default function EditPlayablescard({dataplayble ,name ,placeholder, onChange, values}) {

    return (
  
  
<div className="form-group">
        <label className="text-black dark:text-black">{name}</label>
        <input 
        type="text" 
        name={dataplayble}
        placeholder={placeholder}
        value={values}
        onChange={onChange}
        className="form-control block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
</div>
  
  
    )
  }
  