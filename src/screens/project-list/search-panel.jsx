import React from 'react'

export const SearchPanel = ({users, param, setParam}) => {

    return (
        <form>
            <div>
                <input type="text" 
                    value={param.name}
                    onChange={e => setParam(e.target.value)}
                />
                <select onChange={e => {
                    setParam({
                        ...param, personId: e.target.value
                    })
                }}>
                    <option value={""}>负责人</option>
                    {
                        users.map(user => (
                            <option 
                                key={user.id}
                                value={user.id}>
                                    {user.name}
                            </option>
                        ))
                    }
                </select>
            </div>
        </form>
    )
}
