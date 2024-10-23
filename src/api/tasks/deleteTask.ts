export const deleteTask = async (id: string) => {
  const options = {
    method: 'DELETE',
  };
  try {
    let response = await fetch(`/api/tasks/${id}`, options);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
};
