import { useState, useEffect } from 'react';
import './TagInput.css';
type Props = {
  tagStrings: string[],
  handleTags: any
}

function TagsInput({tagStrings, handleTags}:Props){
    const [tags, setTags] = useState<string[]>(tagStrings);
    
    useEffect(() => {
      setTags(tagStrings)
    }, [tagStrings])

    function handleKeyDown(e:any){
      if (e.keyCode === 13 ) {
         e.preventDefault();
      }

      if(e.key !== 'Enter') return
      const value = e.target.value
      if(!value.trim()) return
      setTags([...tags, value])
      handleTags([...tags, value])
      e.target.value = ''
    }

    function removeTag(index:number){
        setTags(tags.filter((el, i) => i !== index))
        handleTags(tags.filter((el, i) => i !== index))
    }

    return (
        <div className="tags-input-container">
            { tags.map((tag, index) => (
                <div className="tag-item" key={index}>
                    <span className="text">{tag}</span>
                    <span className="close" onClick={() => removeTag(index)}>&times;</span>
                </div>
            )) }
            <input onKeyDown={handleKeyDown} type="text" className="tags-input" placeholder="Add skills" />
        </div>
    )
}

export default TagsInput