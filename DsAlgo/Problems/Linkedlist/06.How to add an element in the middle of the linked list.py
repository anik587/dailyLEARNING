# add an element at the middle position of a doubly linked


class Element(object):
    def __init__(self, value) -> None:
        self.value = value
        self.next = None


class LinkedList(object):
    def __init__(self, head) -> None:
        self.head = head

    def add_element(self, new_element):
        current = self.head
        if self.head:
            while current.next:
                current = current.next
            current.next = new_element
        else:
            self.head = new_element

        return

    def get_middle(self):
        current = self.head
        middle = self.head
        counter = 0
        while current.next:
            counter += 1
            if counter % 2 == 0:
                middle = middle.next
            current = current.next
        return middle.value

    def add_middle(self, new_element):
        current = self.head
        middle = self.head
        previous_middle = self.head
        counter = 0
        while current.next:
            counter += 1
            if counter % 2 == 0:
                previous_middle = middle
                middle = middle.next
            current = current.next
        new_element.next = middle
        previous_middle.next = new_element
        return 0


e1 = Element(1)
e2 = Element(2)
e3 = Element(3)
e4 = Element(4)
e5 = Element(5)
e6 = Element(6)
e7 = Element(7)

ll = LinkedList(e1)
ll.add_element(e2)
ll.add_element(e3)
ll.add_element(e4)
ll.add_element(e5)
ll.add_element(e6)

print(ll.add_middle(e7))
print(ll.get_middle())
