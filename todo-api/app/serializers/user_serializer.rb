class UserSerializer < ActiveModel::Serializer
  # attributesでjsonに含めるレコードを指定
  attributes :id, :name, :email
  # has_many :todosと書くことでユーザに紐付いているtodoレコードも一緒にjsonに含んでくれる
  has_many :todos
end
