import React, { useState } from 'react'

const Notepad = () => {
    let [title, setTitle] = useState('');
    let [description, setDescription] = useState('');
    const [copyNote, setCopyNote] = useState([]);


    const closeNote = function (index) {

        let eachSavedNote = [...copyNote];
        eachSavedNote.splice(index, 1);
        setCopyNote(eachSavedNote);
    }


    const formSubmit = (e) => {
        e.preventDefault();

        if (title.trim() == '' || description.trim() == '') {
            alert("Please enter a valid title and description");
            return;
        }

        let allNotes = [...copyNote];

        allNotes.push({ title, description });
        setCopyNote(allNotes);

        setTitle('');
        setDescription('');
    }

    return (
        <div className="w-11/12 m-auto p-20 flex flex-col gap-4">
            <form onSubmit={(e) => { formSubmit(e) }} className='flex flex-col gap-4'>
                <input
                    type="text"
                    placeholder='Enter note title'
                    className='px-2 py-4 outline-gray-300 border-gray-300 border-2'
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />
                <textarea
                    name="note description"
                    placeholder='Enter note description'
                    id=""
                    className='px-2 py-4 outline-gray-300 border-gray-300 border-2'
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}>
                </textarea>
                <button className='px-1 py-3 bg-blue-500 text-2xl text-shadow-white w-2xl m-auto rounded cursor-pointer'
                >Add notes
                </button>
            </form >


            <div className='border p-5'>
                <h1 className='text-center'>Your notes</h1>
                <div className='p-1 w-fit flex justify-around gap-4'>
                    {
                        copyNote.map(function (elem, index) {
                            return (
                                <>
                                    <div key={index} className='p-2 bg-green-100 text-black min-w-42 relative'>
                                        <button type='button'
                                            onClick={() => {
                                                closeNote(index)
                                            }}
                                            className='absolute top-0 right-2 font-bold cursor-pointer'>X
                                        </button>
                                        <div>
                                            <h3 className='text-2xl font-bold'>{elem.title}</h3>
                                            <p>{elem.description}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Notepad