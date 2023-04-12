(ns hello-world.core)

(println "Hello world!")

(defn ^:export square [x]
  (* x x))