<template>
  <div
    v-for="group in groups"
    :key="group.id"
    :ref="groupRef"
    class="container"
  >
    <div
      v-for="dragItem in dragItems"
      :key="dragItem.id"
      :ref="dragItemRef"
      class="draggable"
      draggable="true"
    >
      <div>{{ group.name }} {{ dragItem.title }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const groupArray = ref([]);
const groupRef = (el) => groupArray.value.push(el);
const groups = [{ name: "group1" }, { name: "group2" }];

const dragItemArray = ref([]);
const dragItemRef = (el) => dragItemArray.value.push(el);
const dragItems = [{ title: "one" }, { title: "two" }, { title: "third" }];

onMounted(() => {
  dragItemArray.value.forEach((el) => {
    el.addEventListener("dragstart", () => {
      el.classList.add("dragging");
    });

    el.addEventListener("dragend", () => {
      el.classList.remove("dragging");
    });
  });

  function getDragAfterElement(container, y) {
    const draggableElements = [
      ...container.querySelectorAll(".draggable:not(.dragging)"),
    ];

    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect(); //해당 엘리먼트에 top값, height값 담겨져 있는 메소드를 호출해 box변수에 할당
        const offset = y - box.top - box.height / 2; //수직 좌표 - top값 - height값 / 2의 연산을 통해서 offset변수에 할당
        if (offset < 0 && offset > closest.offset) {
          // (예외 처리) 0 이하 와, 음의 무한대 사이에 조건
          return { offset: offset, element: child }; // Element를 리턴
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY }
    ).element;
  }

  groupArray.value.forEach((container) => {
    container.addEventListener("dragover", (e) => {
      e.preventDefault();
      const afterElement = getDragAfterElement(container, e.clientY); //(결국 드래그하여 마지막 영역의 엘리먼트를 반환합니다.)
      const currentDraggable = document.querySelector(".dragging"); //현재 내가 잡은 엘리먼트
      container.insertBefore(currentDraggable, afterElement); //마지막까지 드래그한 엘리먼트 앞에 현재 내가 잡은 엘리먼트를 삽입 합니다.
    });
  });
});
</script>

<style lang="scss">
.container {
  padding: 2rem;
  background: #f3f5f7;
}
.container:nth-child(n + 2) {
  margin-top: 1rem;
}

.draggable {
  height: 82px;
  line-height: 82px;
  background: white;
  border: 1px solid #000000;
  border-bottom: none;
  box-sizing: border-box;
  cursor: move;
}
.draggable:last-child {
  border-bottom: 1px solid #000000;
}
.draggable.dragging {
  opacity: 0.3;
  border: 5px dashed red;
}
</style>
